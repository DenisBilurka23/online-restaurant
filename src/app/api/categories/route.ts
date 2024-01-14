import { NextResponse } from 'next/server'
import { type FoodCategories } from '../../../../types'
import AppetizerCatImg from '../../../../public/img/categories/gyoza.jpg'
import SoupAndNoodleCatImg from '../../../../public/img/categories/kimchi_Jjigae.png'
import MainCourseCatImg from '../../../../public/img/categories/bibimbap.jpg'
import SakeCatImg from '../../../../public/img/categories/sake.jpg'

export const GET: () => Promise<NextResponse<FoodCategories>> = async () => {
	const json = {
		success: true,
		msgCode: 1,
		msg: '',
		categories: [
			{
				id: 1,
				name: 'Appetizers',
				img_path: AppetizerCatImg
			},
			{
				id: 2,
				name: 'Soups & Noodles',
				img_path: SoupAndNoodleCatImg
			},
			{
				id: 3,
				name: 'Main Courses',
				img_path: MainCourseCatImg
			},
			{
				id: 4,
				name: 'Drinks',
				img_path: SakeCatImg
			}
		]
	}

	return NextResponse.json(json)
}
