export interface Item {
  id: string
  name: string
  description: string
  img: string
  price: number
}

export interface CartItem {
  item: string
  quantity: number
  user: string
}

export interface LineItem {
  id: string
  name: string
  description: string
  img: string
  price: number
  quantity: number
}
