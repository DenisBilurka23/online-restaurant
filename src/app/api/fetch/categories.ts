import { type FoodCategory } from '../../../../types'

export const getCategory: (categoryId: string | undefined) => Promise<FoodCategory> = async categoryId => {
	if (!categoryId) {
		return null
	}
	const res = await fetch(`http://localhost:3000/api/categories/${categoryId}`, { next: { revalidate: 5 } })
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return await res.json()
}
