package middleware

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// AuthMiddleware prevents requests without a token from continuing
func AuthMiddleware(c *gin.Context) {
	token := c.Request.Header.Get("token")

	if token == "" {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "please provide an auth token"})
		return
	}

	c.Next()
}
