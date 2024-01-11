import MenuSection from '@/app/components/Sections/Menu'
import { type FC } from 'react'

interface Props {
	searchParams: { categoryId: string; productId: string }
}

const Home: FC<Props> = ({ searchParams }) => (
	<div className="flex w-full h-auto flex-col items-center justify-center">
		<MenuSection categoryId={searchParams.categoryId} productId={searchParams.productId} baseUrl="/" />
	</div>
)

export default Home
