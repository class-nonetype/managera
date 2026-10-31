package middlewares

import (
	"log/slog"
	"net/http"
	"runtime/debug"
)

func Recovery(logger *slog.Logger) func(http.Handler) http.Handler {
	return func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			defer func() {
				if err := recover(); err != nil {
					stack := debug.Stack()

					logger.ErrorContext(
						r.Context(),
						"recovery panic",
						slog.Any("error", err),
						slog.String("stack", string(stack)),
						slog.String("path", r.URL.Path),
					)

					http.Error(w, "internal server error", http.StatusInternalServerError)
				}
			}()

			h.ServeHTTP(w, r)
		})
	}
}
