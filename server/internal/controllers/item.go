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
		models.Item{ID: "1", Name: "Lemon", Description: "A species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.", Price: 100, Img: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3096&q=80"},
		models.Item{ID: "2", Name: "Tomato", Description: "Edible, often red berry of the plant Solanum lycopersicum, commonly known as a tomato plant.", Price: 250, Img: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"},
		models.Item{ID: "3", Name: "Avocado", Description: "A tree likely originating from south-central Mexico, is classified as a member of the flowering plant family Lauraceae.", Price: 326, Img: "https://images.unsplash.com/photo-1449339854873-750e6913301b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"},
		models.Item{ID: "4", Name: "Walnut", Description: "The nut of any tree of the genus Juglans (Family Juglandaceae), particularly the Persian or English walnut.", Price: 122, Img: "https://images.unsplash.com/photo-1453368243168-0e39a069e468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2714&q=80"},
		models.Item{ID: "5", Name: "Carrot", Description: "A root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist.", Price: 199, Img: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3561&q=80"},
		models.Item{ID: "6", Name: "Cucumbr", Description: "A widely-cultivated creeping vine plant in the Cucurbitaceae gourd family that bears cucumiform fruits, which are used as vegetables.", Price: 482, Img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80"},
		models.Item{ID: "7", Name: "Pear", Description: "A species of genus Pyrus /ˈpaɪrəs/, in the family Rosaceae, bearing the pomaceous fruit of the same name.", Price: 129, Img: "https://images.unsplash.com/photo-1421167418805-7f170a738eb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"},
		models.Item{ID: "8", Name: "Green Bean", Description: "The unripe, young fruit of various cultivars of the common bean (Phaseolus vulgaris).", Price: 89, Img: "https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"},
		models.Item{ID: "9", Name: "Onion", Description: "A vegetable that is the most widely cultivated species of the genus Allium.", Price: 163, Img: "https://images.unsplash.com/31/RpgvvtYAQeqAIs1knERU_vegetables.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=2554&q=80"},
		models.Item{ID: "10", Name: "Pumpkin", Description: "A cultivar of winter squash that is round with smooth, slightly ribbed skin, and is most often deep yellow to orange in coloration.", Price: 524, Img: "https://images.unsplash.com/photo-1443464812268-44d8bb5f2df5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80"},
	}

	return ItemController{itemList: defaultItems}
}

// GetItems returns the list of items in the ItemController
func (ic *ItemController) GetItems(c *gin.Context) {
	c.JSON(http.StatusOK, ic.itemList)
}
