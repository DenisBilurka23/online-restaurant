import MenuSection from '@/app/components/Sections/Menu'
import { type FC } from 'react'
import Banner from '@/app/components/Banner'
import MainBanner from '../../../public/img/banner-main.jpg'

interface Props {
	searchParams: { categoryId: string; productId: string }
}

const Home: FC<Props> = ({ searchParams }) => (
	<div className="flex w-full h-auto flex-col items-center justify-center">
		<Banner img={MainBanner} alt="banner" title="Discover Culinary Delights" />
		<MenuSection categoryId={searchParams.categoryId} productId={searchParams.productId} baseUrl="/" />
	</div>
)

export default Home
