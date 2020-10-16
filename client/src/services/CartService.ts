import axios from 'axios'

import { CartItem } from '../utils/types'

interface NewCartItem {
  item: string
  quantity: number
}

export class CartService {
  static async getAll(): Promise<Array<CartItem>> {
    const { data } = await axios.get<Array<CartItem>>('/cart')
    return data
  }

  static async addItem(newCartItem: NewCartItem): Promise<CartItem> {
    const { data } = await axios.post<CartItem>('/cart', newCartItem)
    return data
  }

  static async updateItemQuantity(itemId: string, quantity: number): Promise<CartItem> {
    const { data } = await axios.patch<CartItem>(`/cart/${itemId}`, { quantity })
    return data
  }
}
