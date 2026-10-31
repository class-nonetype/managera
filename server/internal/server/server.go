package server

import (
	"context"
	"errors"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

type Server struct {
	httpServer   *http.Server
	httpServeMux *http.ServeMux
	logger       *slog.Logger
}

func New(addr string, logger *slog.Logger) *Server {
	httpServeMux := http.NewServeMux()

	httpServer := &http.Server{
		Addr:    addr,
		Handler: httpServeMux,

		ReadTimeout:       10 * time.Second,
		WriteTimeout:      30 * time.Second,
		IdleTimeout:       120 * time.Second,
		ReadHeaderTimeout: 5 * time.Second,
	}

	return &Server{
		httpServer:   httpServer,
		httpServeMux: httpServeMux,
		logger:       logger,
	}
}

func (server *Server) Start() error {
	sigCh := make(chan os.Signal, 1)
	signal.Notify(
		sigCh,
		syscall.SIGTERM,
		syscall.SIGINT,
	)
	defer signal.Stop(sigCh)

	errCh := make(chan error, 1)

	go func() {
		server.logger.Info("Ok", slog.String("addr", server.httpServer.Addr))

		if err := server.httpServer.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			errCh <- err
		}
	}()

	select {
	case err := <-errCh:
		return err
	case sig := <-sigCh:
		server.logger.Info(
			"Signal received",
			slog.String("signal", sig.String()),
		)
	}

	ctx, cancel := context.WithTimeout(
		context.Background(),
		30*time.Second,
	)
	defer cancel()

	if err := server.httpServer.Shutdown(ctx); err != nil {
		server.logger.Error(
			"Error",
			slog.Any("error", err),
		)
	}

	server.logger.Info("Detenido.")

	return nil

}

func (server *Server) RegisterRoutes(pattern string, handler http.Handler) {
	server.httpServeMux.Handle(pattern, handler)
}

func (server *Server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	server.httpServeMux.ServeHTTP(w, r)
}

func (server *Server) Use(middleware func(http.Handler) http.Handler) {
	server.httpServer.Handler = middleware(server.httpServer.Handler)
}
