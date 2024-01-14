import { type NextRequest, NextResponse } from 'next/server'
import { type FoodCategory } from '../../../../../types'

type RequestType = (
	request: NextRequest,
	{
		params: { categoryId: string }
	}
) => Promise<NextResponse<FoodCategory>>

export const GET: RequestType = async (request, { params }) => {
	const categoryId = params.categoryId
	const categories = [
		{
			id: 1,
			name: 'Appetizers',
			img_path:
				'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			id: 2,
			name: 'Soups & Noodles',
			img_path:
				'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			id: 3,
			name: 'Main Courses',
			img_path:
				'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			id: 4,
			name: 'Drinks',
			img_path:
				'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		}
	]
	const category = categories.find(({ id }) => +id === +categoryId)

	const json = {
		success: true,
		msgCode: 1,
		msg: '',
		category
	}

	return NextResponse.json(json)
}
