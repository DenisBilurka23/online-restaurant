import MenuSection from '@/app/components/Sections/Menu'
import { type FunctionComponent } from 'react'

const Menu: FunctionComponent = () => {
	return (
		<div className="flex w-full h-auto flex-col items-center justify-center">
			<MenuSection />
		</div>
	)
}

export default Menu
