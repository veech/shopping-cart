package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/veech/shopping-cart/internal/models"
	"net/http"
)

func getToken(c *gin.Context) string {
	// Ideally this would be some sort of token from which we could decrypt to get a user
	// for simplicity, it will just be the username
	token := c.Request.Header.Get("token")

	return token
}

type cartItemUpdate struct {
	Quantity uint `json:"quantity"`
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

func (cc *CartController) getCartItemByID(userID string, itemID string) *models.CartItem {
	for i := range cc.cartItems {
		cartItem := &cc.cartItems[i]

		if cartItem.User != userID || cartItem.Item != itemID {
			continue
		}

		return cartItem
	}

	return nil
}

func (cc *CartController) removeCartItemByID(userID string, itemID string) {
	newCartItems := []models.CartItem{}

	for _, cartItem := range cc.cartItems {
		if cartItem.User == userID && cartItem.Item == itemID {
			continue
		}

		newCartItems = append(newCartItems, cartItem)
	}

	cc.cartItems = newCartItems
}

// NewCartController initilizes a new CartController with no cart items
func NewCartController() CartController {
	return CartController{cartItems: []models.CartItem{}}
}

// GetCartItems returns the list of user's cart items
func (cc *CartController) GetCartItems(c *gin.Context) {
	username := getToken(c)

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

	username := getToken(c)
	data.User = username

	// Ideally, we would also verify that the item id that is being added to the cart exists in the db
	// before adding it to cartItems

	existingCartItem := cc.getCartItemByID(username, data.Item)

	if existingCartItem != nil {
		c.AbortWithStatusJSON(http.StatusConflict, gin.H{"error": "item already exists in cart"})
		return
	}

	cc.cartItems = append(cc.cartItems, data)
	c.JSON(http.StatusCreated, data)
}

// UpdateCartItem updates a single cart item
func (cc *CartController) UpdateCartItem(c *gin.Context) {
	var data cartItemUpdate

	if c.BindJSON(&data) != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "invalid request data"})
		return
	}

	itemID := c.Param("itemId")
	username := getToken(c)

	existingCartItem := cc.getCartItemByID(username, itemID)

	if existingCartItem == nil {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"error": "item not found in cart"})
		return
	}

	existingCartItem.Quantity = data.Quantity
	c.JSON(http.StatusOK, existingCartItem)
}

// DeleteCartItem removes a single cart item. Does not thing if item couldn't be found
func (cc *CartController) DeleteCartItem(c *gin.Context) {
	username := getToken(c)
	itemID := c.Param("itemId")

	cc.removeCartItemByID(username, itemID)

	c.JSON(http.StatusOK, nil)
}
