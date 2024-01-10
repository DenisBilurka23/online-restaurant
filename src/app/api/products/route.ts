import { type NextRequest, NextResponse } from 'next/server'
import { type Products } from '../../../../types'

export const products = [
	{
		id: 1,
		name: 'Deep-Dish Pizza',
		price: 50,
		abstract: 'some abstruct',
		description: 'some description',
		img_path: 'https://pngfre.com/wp-content/uploads/pizza-png-from-pngfre-5-1024x517.png',
		category_id: 1,
		category_name: 'pizza',
		product_status: 'in stock'
	},
	{
		id: 2,
		name: 'York-style Pizza',
		price: 100,
		abstract: 'some abstruct',
		description: 'some description',
		img_path: 'https://pngfre.com/wp-content/uploads/pizza-png-from-pngfre-5-1024x517.png',
		category_id: 1,
		category_name: 'pizza',
		product_status: 'out of stock'
	},
	{
		id: 3,
		name: 'Deep-Dish Pizza',
		price: 50,
		abstract: 'some abstruct',
		description: 'some description',
		img_path: 'https://pngfre.com/wp-content/uploads/pizza-png-from-pngfre-5-1024x517.png',
		category_id: 2,
		category_name: 'pizza',
		product_status: 'in stock'
	},
	{
		id: 4,
		name: 'York-style Pizza',
		price: 100,
		abstract: 'some abstruct',
		description: 'some description',
		img_path: 'https://pngfre.com/wp-content/uploads/pizza-png-from-pngfre-5-1024x517.png',
		category_id: 3,
		category_name: 'pizza',
		product_status: 'out of stock'
	}
]

export const GET: (request: NextRequest) => Promise<NextResponse<Products>> = async request => {
	const categoryId = request.nextUrl.searchParams.get('categoryId')

	const filteredProducts = !categoryId ? products : products.filter(product => product.category_id === +categoryId)

	const json = {
		success: true,
		msgCode: 1,
		msg: '',
		products: filteredProducts
	}

	return NextResponse.json(json)
}
