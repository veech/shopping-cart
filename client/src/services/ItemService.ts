import axios from 'axios'

import { Item } from '../utils/types'

export class ItemService {
  static async getAll(): Promise<Array<Item>> {
    const { data } = await axios.get<Array<Item>>('/items')
    return data
  }
}
