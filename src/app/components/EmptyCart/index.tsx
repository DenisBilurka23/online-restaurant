import Image from 'next/image'
import EmptyCartSVG from '../../../../public/img/emptyCart.svg'

const EmptyCart = () => {
	return (
		<div className="w-full p-5 flex flex-col items-center gap-4 justify-center">
			<Image className="h-[340px]" width="350" height="340" src={EmptyCartSVG} alt="empty cart" />
			<p className="text-textColor  font-semibold">Cart is empty</p>
		</div>
	)
}

export default EmptyCart
