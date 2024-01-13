import { NextResponse } from 'next/server'
import { type FoodCategories } from '../../../../types'

export const GET: () => Promise<NextResponse<FoodCategories>> = async () => {
	const json = {
		success: true,
		msgCode: 1,
		msg: '',
		categories: [
			{
				id: 1,
				name: 'Appetitizer',
				img_path:
					'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
			},
			{
				id: 2,
				name: 'Drinks',
				img_path:
					'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
			},
			{
				id: 3,
				name: 'Desserts',
				img_path:
					'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
			},
			{
				id: 4,
				name: 'Soups',
				img_path:
					'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
			}
		]
	}

	return NextResponse.json(json)
}
