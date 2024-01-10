import { type Products } from '../../../../types'

export const getProducts: (categoryId: number | undefined) => Promise<Products> = async categoryId => {
	const res = await fetch(`http://localhost:3000/api/products/${categoryId ? `?categoryId=${categoryId}` : ''}`, {
		next: { revalidate: 5 }
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return await res.json()
}
