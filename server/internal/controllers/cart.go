package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/veech/joshai-coding-quiz/internal/models"
	"net/http"
)

func getTokenFromContext(c *gin.Context) string {
	// Ideally this would be some sort of token from which we could decrypt to get a user
	// for simplicity, it will just be the username
	token := c.Request.Header.Get("token")

	return token
}

// CartController contains the route handlers for "cart" routes
type CartController struct {
	cartItems []models.CartItem
}

func (cc *CartController) getCartItemsByUserID(userID string) []models.CartItem {
	result := []models.CartItem{}

	for _, cartItem := range cc.cartItems {
		if cartItem.User != userID {
			continue
		}

		result = append(result, cartItem)
	}

	return result
}

func (cc *CartController) getCartItemByItemID(userID string, itemID string) *models.CartItem {
	for i := range cc.cartItems {
		cartItem := &cc.cartItems[i]

		if cartItem.User != userID || cartItem.Item != itemID {
			continue
		}

		return cartItem
	}

	return nil
}

// NewCartController initilizes a new CartController with no cart items
func NewCartController() CartController {
	return CartController{cartItems: []models.CartItem{}}
}

// GetCartItems returns the list of user's cart items
func (cc *CartController) GetCartItems(c *gin.Context) {
	username := getTokenFromContext(c)

	cartItems := cc.getCartItemsByUserID(username)

	c.JSON(http.StatusOK, cartItems)
}

// AddItemToCart adds an item to the user's cart
func (cc *CartController) AddItemToCart(c *gin.Context) {
	var data models.CartItem

	if c.BindJSON(&data) != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "invalid request data"})
		return
	}

	username := getTokenFromContext(c)
	data.User = username

	// Ideally, we would also verify that the item id that is being added to the cart exists in the db
	// before adding it to cartItems

	existingCartItem := cc.getCartItemByItemID(data.User, data.Item)

	// Add quantity to existing cart item if it already exists
	if existingCartItem != nil {
		existingCartItem.Quantity = existingCartItem.Quantity + data.Quantity
		c.JSON(http.StatusOK, existingCartItem)
		return
	}

	cc.cartItems = append(cc.cartItems, data)
	c.JSON(http.StatusCreated, data)
}
