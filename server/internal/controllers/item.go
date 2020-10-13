package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// item uses an int to store currency as floats can be unpredictable
type item struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Img         string `json:"img"`
	Price       int    `json:"price"`
}

// ItemController contains the route handlers for "item" routes
type ItemController struct {
	itemList []item
}

// GetItems returns the list of items in the ItemController
func (ic *ItemController) GetItems(c *gin.Context) {
	c.JSON(http.StatusOK, ic.itemList)
}

// NewItemController initilizes a new ItemController with the mock data
func NewItemController() ItemController {
	defaultItems := []item{
		item{Name: "item1", Description: "This is item1", Price: 100},
		item{Name: "item2", Description: "This is item2", Price: 450},
		item{Name: "item3", Description: "This is item3", Price: 325},
	}

	return ItemController{itemList: defaultItems}
}
