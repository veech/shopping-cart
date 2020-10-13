package main

import (
	"github.com/gin-gonic/gin"
	"github.com/veech/joshai-coding-quiz/internal/controllers"
)

func main() {
	itemController := controllers.NewItemController()

	router := gin.Default()

	router.GET("/items", itemController.GetItems)

	router.Run(":3000")
}
