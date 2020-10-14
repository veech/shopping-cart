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