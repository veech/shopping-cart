package main

import (
	"github.com/gin-gonic/gin"
	"github.com/veech/joshai-coding-quiz/internal/controllers"
	"github.com/veech/joshai-coding-quiz/internal/middleware"
)

func main() {
	itemController := controllers.NewItemController()
	cartController := controllers.NewCartController()

	router := gin.Default()

	/* --- Public routes --- */

	router.GET("/items", itemController.GetItems)

	router.Use(middleware.AuthMiddleware)

	/* --- User routes --- */

	router.GET("/cart", cartController.GetCartItems)
	router.POST("/cart", cartController.AddItemToCart)

	router.Run(":3000")
}
