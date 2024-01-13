import Button from './Button'
import { type Category, type FoodCategories } from '../../../../types'
import { type FC } from 'react'

interface Props {
	categoryId: string
	baseUrl: string
}

const getCategories: () => Promise<FoodCategories> = async () => {
	const res = await fetch('http://localhost:3000/api/categories', { next: { revalidate: 5 } })
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return await res.json()
}

const Filters: FC<Props> = async ({ categoryId, baseUrl }) => {
	const { categories } = await getCategories()

	return (
		<div
			className={
				'w-full py-10 flex items-center justify-start md:justify-center  h-auto gap-4 md:gap-8  px-2  overflow-x-scroll scrollbar-hidden  scroll-smooth'
			}
		>
			<Button
				categoryId={categoryId}
				category={{
					id: 0,
					name: 'Menu',
					img_path:
						'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
				}}
				url={baseUrl}
			/>
			{categories?.map((category: Category) => {
				return <Button key={category.id} category={category} categoryId={categoryId} />
			})}
		</div>
	)
}

export default Filters
