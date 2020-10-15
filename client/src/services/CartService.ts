import axios from 'axios'

import { CartItem } from '../utils/types'

interface NewCartItem {
  item: string
  quantity: number
}

export class CartService {
  static async addItemToCart(newCartItem: NewCartItem): Promise<CartItem> {
    const { data } = await axios.post<CartItem>('/cart', newCartItem)
    return data
  }
}
