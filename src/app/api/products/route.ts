import { type NextRequest, NextResponse } from 'next/server'
import { type Products } from '../../../../types'

import GyozaImg from '../../../../public/img/products/gyoza.jpg'
import KimbapImg from '../../../../public/img/products/kimbap.jpg'
import KimchiJjigaeImg from '../../../../public/img/products/kimchi_Jjigae.png'
import TonkotsuRamenImg from '../../../../public/img/products/tonkotsu_ramen.jpg'
import OkonomiyakiImg from '../../../../public/img/products/okonomiyaki.jpg'
import BibimbapImg from '../../../../public/img/products/bibimbap.jpg'
import MakgeolliImg from '../../../../public/img/products/makgeolli.jpg'
import SakeImg from '../../../../public/img/products/sake.jpg'

export const products = [
	{
		id: 1,
		name: 'Gyoza',
		price: 9.99,
		abstract: 'Pan-fried or steamed dumplings with a choice of pork or vegetable filling.',
		description: 'Pan-fried or steamed dumplings with a choice of pork or vegetable filling.',
		img_path: GyozaImg,
		category_id: 1,
		category_name: 'Appetizers',
		product_status: 'in stock'
	},
	{
		id: 2,
		name: 'Kimbap',
		price: 12.99,
		abstract: 'Korean rice rolls with vegetables, choice of bulgogi beef, or spicy tuna.',
		description: 'Korean rice rolls with vegetables, choice of bulgogi beef, or spicy tuna.',
		img_path: KimbapImg,
		category_id: 1,
		category_name: 'Appetizers',
		product_status: 'in stock'
	},
	{
		id: 3,
		name: 'Tonkotsu Ramen',
		price: 15.99,
		abstract: 'Choice of miso, shoyu, or shio broth with options like pork belly, chicken, or tofu.',
		description: 'Choice of miso, shoyu, or shio broth with options like pork belly, chicken, or tofu.',
		img_path: TonkotsuRamenImg,
		category_id: 2,
		category_name: 'Soups & Noodles',
		product_status: 'in stock'
	},
	{
		id: 4,
		name: 'Kimchi Jjigae',
		price: 13.99,
		abstract: 'Spicy Korean kimchi stew with tofu, pork, and vegetables.',
		description: 'Spicy Korean kimchi stew with tofu, pork, and vegetables.',
		img_path: KimchiJjigaeImg,
		category_id: 2,
		category_name: 'Soups & Noodles',
		product_status: 'in stock'
	},
	{
		id: 5,
		name: 'Okonomiyaki',
		price: 15.99,
		abstract:
			'Japanese savory pancake made with a batter of flour, grated yam, shredded cabbage, and various ingredients like meat or seafood.',
		description:
			'Japanese savory pancake made with a batter of flour, grated yam, shredded cabbage, and various ingredients like meat or seafood.',
		img_path: OkonomiyakiImg,
		category_id: 3,
		category_name: 'Main Courses',
		product_status: 'in stock'
	},
	{
		id: 6,
		name: 'Bibimbap',
		price: 18.99,
		abstract: 'Mixed rice bowl with assorted vegetables, a fried egg, and choice of meat.',
		description: 'Mixed rice bowl with assorted vegetables, a fried egg, and choice of meat.',
		img_path: BibimbapImg,
		category_id: 3,
		category_name: 'Main Courses',
		product_status: 'in stock'
	},
	{
		id: 7,
		name: 'Bibimbap',
		price: 11.99,
		abstract: 'Korean rice wine.',
		description: 'Korean rice wine.',
		img_path: MakgeolliImg,
		category_id: 4,
		category_name: 'Drinks',
		product_status: 'in stock'
	},
	{
		id: 8,
		name: 'Sake',
		price: 49.99,
		abstract: 'Traditional Japanese rice wine',
		description: 'Traditional Japanese rice wine',
		img_path: SakeImg,
		category_id: 4,
		category_name: 'Drinks',
		product_status: 'in stock'
	}
]

// {
// 		id: 4,
// 		name: 'Deep-Dish Pizza',
// 		price: 50,
// 		abstract: 'some abstruct',
// 		description: 'some description',
// 		img_path: 'https://pngfre.com/wp-content/uploads/pizza-png-from-pngfre-5-1024x517.png',
// 		category_id: 2,
// 		category_name: 'pizza',
// 		product_status: 'in stock'
// 	},
// 	{
// 		id: 5,
// 		name: 'York-style Pizza',
// 		price: 100,
// 		abstract: 'some abstruct',
// 		description: 'some description',
// 		img_path: 'https://pngfre.com/wp-content/uploads/pizza-png-from-pngfre-5-1024x517.png',
// 		category_id: 3,
// 		category_name: 'pizza',
// 		product_status: 'in stock'
// 	},

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
