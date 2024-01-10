import NotFound from '../NotFound'
import { type FC } from 'react'
import { getProducts } from '@/app/api/fetch/products'
import ProductItem from '@/app/components/ProductItem'

interface PropTypes {
	categoryId: number | undefined
}

const Container: FC<PropTypes> = async ({ categoryId }) => {
	const { products } = await getProducts(categoryId)

	return (
		<div>
			{products && (
				<div className="mx-auto my-10 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
				</div>
			)}
			{/* {!items && (!col ? <Loader progress={'Fetching Food Items.....'} /> : <NotFound text="Fetching Food Items..." />)} */}
			{products.length === 0 && <NotFound text="No Food Items Available " />}
		</div>
	)
}

export default Container
