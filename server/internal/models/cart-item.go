package models

// CartItem stores the user's username for simplicity.
// In a production setting, we would use a user id that we could verify against the database.
type CartItem struct {
	Item     string `json:"item"`
	Quantity int    `json:"quantity"`
	User     string `json:"user"`
}
