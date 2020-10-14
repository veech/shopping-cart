package main

import (
	"github.com/gin-gonic/gin"
	"github.com/veech/joshai-coding-quiz/internal/controllers"
)

func main() {
	itemController := controllers.NewItemController()
	cartController := controllers.NewCartController()

	router := gin.Default()

	router.GET("/items", itemController.GetItems)

	router.GET("/cart", cartController.GetCartItems)

	router.Run(":3000")
}
