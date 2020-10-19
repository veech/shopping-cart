package main

import (
	"github.com/gin-gonic/gin"
	"github.com/veech/shopping-cart/internal/controllers"
	"github.com/veech/shopping-cart/internal/middleware"
)

func main() {
	itemController := controllers.NewItemController()
	cartController := controllers.NewCartController()

	app := gin.Default()

	app.Use(middleware.CORSMiddleware)

	router := app.Group("/api")

	publicRouter := router.Group("")

	privateRouter := router.Group("")
	privateRouter.Use(middleware.AuthMiddleware)

	publicRouter.GET("/items", itemController.GetItems)

	privateRouter.GET("/cart", cartController.GetCartItems)
	privateRouter.POST("/cart", cartController.AddItemToCart)
	privateRouter.PATCH("/cart/:itemId", cartController.UpdateCartItem)
	privateRouter.DELETE("/cart/:itemId", cartController.DeleteCartItem)

	// For simplicity, hard coding port instead of obtaining via env var
	app.Run(":8080")
}
