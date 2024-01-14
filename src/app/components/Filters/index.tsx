import Button from './Button'
import { type Category } from '../../../../types'
import { type FC } from 'react'
import { getCategories } from '@/app/api/fetch/categories'

interface Props {
	categoryId: string
	baseUrl: string
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
