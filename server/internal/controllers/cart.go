package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/veech/joshai-coding-quiz/internal/models"
	"net/http"
)

func getTokenFromContext(c *gin.Context) string {
	// Ideally this would be some sort of token from which we could get a user from when decrypted
	// for simplicity, it will just be the username
	token := c.Request.Header.Get("token")

	return token
}

// CartController contains the route handlers for "cart" routes
type CartController struct {
	cartItems []models.CartItem
}

func (cc *CartController) getCartItemsByUser(user string) []models.CartItem {
	result := []models.CartItem{}

	for _, cartItem := range cc.cartItems {
		if cartItem.User == user {
			result = append(result, cartItem)
		}
	}

	return result
}

// NewCartController initilizes a new CartController with no cart items
func NewCartController() CartController {
	return CartController{cartItems: []models.CartItem{
		models.CartItem{Item: "1", Quantity: 1, User: "user1"},
	}}
}

// GetCartItems returns the list of user's cart items
func (cc *CartController) GetCartItems(c *gin.Context) {
	username := getTokenFromContext(c)

	cartItems := cc.getCartItemsByUser(username)

	c.JSON(http.StatusOK, cartItems)
}
