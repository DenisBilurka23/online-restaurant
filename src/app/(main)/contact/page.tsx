import Image from 'next/image'
import BannerImg from '../../../../public/images/contact_banner.jpg'
import { Contacts } from '../../utils/contacts'

const Contact = (): JSX.Element => {
	return (
		<div>
			<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-96">
				<Image
					src={BannerImg}
					alt=""
					className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
				/>
				<div
					className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
					aria-hidden="true"
				>
					<div
						className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div
					className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
					aria-hidden="true"
				>
					<div
						className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-12xl lg:mx-0">
						<h2 className="text-4xl font-bold tracking-tight text-center text-white sm:text-6xl">Contact</h2>
					</div>
				</div>
			</div>


			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-indigo-600">Toronto-Based</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Amazing Sizzles you can&apos;t miss in TO
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Established in 2001, this Toronto-based gem has been tantalizing taste buds with its exquisite Okonomi and Bulgogi bibimbap. Renowned for its culinary artistry, the restaurant seamlessly blends traditional flavors with modern flair. Embracing the digital age, it offers a seamless online ordering service, ensuring a delectable experience reaches your doorstep.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{Contacts.map(contact => (
								<div key={contact.name} className="relative pl-16">
									<dt className="text-base font-semibold leading-7 text-gray-900">
										<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
											<contact.icon className="h-6 w-6 text-white" aria-hidden="true" />
										</div>
										{contact.name}
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">{contact.description}</dd>
									<dd className="mt-2 text-base leading-7 text-gray-600">{contact.description2}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div >

			<div className="relative w-full h-96">
				<iframe
					className="absolute top-0 left-0 w-full h-full"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.2956810130822!2d-79.38784734984777!3d43.64212397854147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1704313456782!5m2!1sen!2sca"
					loading="lazy">
				</iframe>
			</div>
		</div >
	)
}

export default Contact
