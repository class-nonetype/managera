package main

import (
	"os"

	"github.com/class-nonetype/managera/server/internal/handler"
	"github.com/class-nonetype/managera/server/internal/logger"
	"github.com/class-nonetype/managera/server/internal/middlewares"
	"github.com/class-nonetype/managera/server/internal/server"
)

func main() {

	logger := logger.New(logger.DevelopmentConfig())

	server := server.New(":8080", logger)
	server.Use(middlewares.Recovery(logger))
	server.Use(middlewares.Logger(logger))

	server.RegisterRoutes("GET /health", handler.NewHealthHandler())
	server.RegisterRoutes("POST /authentication/sign-in", handler.NewAuthenticationHandler())

	if err := server.Start(); err != nil {
		logger.Error("error", "error", err)
		os.Exit(1)
	}
}
