package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/veech/joshai-coding-quiz/internal/models"
	"net/http"
)

// ItemController contains the route handlers for "item" routes
type ItemController struct {
	itemList []models.Item
}

// NewItemController initilizes a new ItemController with the mock data
func NewItemController() ItemController {
	// Hard coding these for now but ideally would be stored in a DB
	defaultItems := []models.Item{
		models.Item{ID: "1", Name: "item1", Description: "This is item1", Price: 100},
		models.Item{ID: "2", Name: "item2", Description: "This is item2", Price: 450},
		models.Item{ID: "3", Name: "item3", Description: "This is item3", Price: 325},
	}

	return ItemController{itemList: defaultItems}
}

// GetItems returns the list of items in the ItemController
func (ic *ItemController) GetItems(c *gin.Context) {
	c.JSON(http.StatusOK, ic.itemList)
}
