package main

import (
	"github.com/gin-gonic/gin"
	"github.com/veech/shopping-cart/internal/controllers"
	"github.com/veech/shopping-cart/internal/middleware"
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
	router.PATCH("/cart/:itemId", cartController.UpdateCartItem)
	router.DELETE("/cart/:itemId", cartController.DeleteCartItem)

	router.Run(":3000")
}
