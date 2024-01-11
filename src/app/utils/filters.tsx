'use client'

import { useStateValue } from '../context/StateProvider'
import { type Product } from '../../../types'

export const FilterFood = (category: string) => {
	const [{ foodItems }, dispatch] = useStateValue()
	return foodItems?.filter((item: Product) => item.category.toLowerCase() === category.toLowerCase())
}

export const GetFoodById = (id: number) => {
	const [{ foodItems }, dispatch] = useStateValue()
	return foodItems?.find((item: Product) => item.id === id)
}
