package handler

import "net/http"

type AuthenticationHandler struct{}

func NewAuthenticationHandler() *AuthenticationHandler {
	return &AuthenticationHandler{}
}

func (h *AuthenticationHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	//
}
