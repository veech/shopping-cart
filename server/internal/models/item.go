package models

// Item uses an int to store currency as floats can be unpredictable
type Item struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Img         string `json:"img"`
	Price       int    `json:"price"`
}
