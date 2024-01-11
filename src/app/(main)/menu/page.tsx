import { type FC } from 'react'
import MenuSection from '@/app/components/Sections/Menu'

interface Props {
	searchParams: { categoryId: string; productId: string }
}

const Category: FC<Props> = ({ searchParams }) => {
	return (
		<div className="flex w-full h-auto flex-col items-center justify-center">
			<MenuSection categoryId={searchParams.categoryId} productId={searchParams.productId} baseUrl="/menu" />
		</div>
	)
}

export default Category
