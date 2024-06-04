'use client'

import { type SubmitHandler, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import AssetUploader from '@/app/components/Upload'
import Image from 'next/image'
import { useStateValue } from '@/app/context/StateProvider'
import { userUpdate } from '@/app/api/fetch/auth'
import Alert from '@/app/components/Alert'
import Loader from '@/app/components/Loader'

interface Inputs {
	name: string
	phoneNumber: string
	streetAddress: string
	apt: string
	city: string
	postalCode: string
	profilePhoto: FileList
}

const UpdateProfile = () => {
	const [state] = useStateValue()
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors }
	} = useForm<Inputs>({
		defaultValues: {
			name: state.user?.name || '',
			phoneNumber: state.user?.phoneNumber || '',
			streetAddress: state.user?.streetAddress || '',
			apt: state.user?.apt || '',
			city: state.user?.city || '',
			postalCode: state.user?.postalCode || ''
		}
	})
	const [alertVisible, setAlertVisible] = useState(false)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const inputOptions = { name: 5, phoneNumberLength: 10 }
	const watchFile = watch('profilePhoto')
	const [file, setFile] = useState(null)

	useEffect(() => {
		if (state.user) {
			setValue('name', state.user.name || '')
			setValue('phoneNumber', state.user.phoneNumber || '')
			setValue('streetAddress', state.user.streetAddress || '')
			setValue('apt', state.user.apt || '')
			setValue('city', state.user.city || '')
			setValue('postalCode', state.user.postalCode || '')
		}
	}, [state.user, setValue])

	console.log('state: ', state)

	useEffect(() => {
		const selectedFile = watchFile ? watchFile[0] : null
		if (selectedFile) {
			const reader = new FileReader()
			reader.onload = () => setFile(selectedFile)
			reader.readAsDataURL(selectedFile)
		}
	}, [watchFile])

	const deleteImage = () => setFile(null)

	const onSubmit: SubmitHandler<Inputs> = async data => {
		setLoading(true)
		console.log('data: ', data)
		const response = await userUpdate(JSON.stringify({ ...data, email: state.user.email }))
		setLoading(false)
		response.error ? setError(response.error) : setAlertVisible(true)
	}

	return (
		<div className="w-full mb-5 h-full flex items-center justify-center">
			<div className="border w-full md:w-[60%] flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4 mt-8 mg:mt-10">
				<div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
					<input
						{...register<keyof Inputs>('name', {
							minLength: {
								value: inputOptions.name,
								message: `Name must be at least ${inputOptions.name} characters long`
							}
						})}
						placeholder="Enter full name"
						className="h-full w-full bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
					/>
					{errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
				</div>
				<div className="w-full border-b py-3 border-gray-300 flex flex-col md:flex-row items-center gap-3">
					<input
						{...register<keyof Inputs>('phoneNumber', {
							minLength: {
								value: inputOptions.phoneNumberLength,
								message: `Phone Number must be at least ${inputOptions.phoneNumberLength} characters long`
							}
						})}
						placeholder="Phone"
						className="h-full w-full bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
					/>
					{errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
				</div>
				<div className="w-full py-3 border-b border-gray-300 flex-items-center gap-2">
					<input
						{...register<keyof Inputs>('streetAddress')}
						placeholder="Street Address"
						className="h-full w-full bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
					/>
				</div>
				<div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
					<input
						{...register<keyof Inputs>('apt')}
						placeholder="Apt, Floor, Suite, Building"
						className="h-full w-full bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
					/>
				</div>
				<div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
					<input
						{...register<keyof Inputs>('city')}
						placeholder="City"
						className="h-full w-full bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
					/>
				</div>
				<div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
					<input
						{...register<keyof Inputs>('postalCode')}
						placeholder="Postal code"
						className="h-full w-full bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
					/>
				</div>
				<div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[225px] md:h-[420px] round-lg">
					{file ? (
						<>
							<div className="relative h-full">
								<Image
									className="max-w-max max-h-full"
									width={500}
									height={500}
									src={URL.createObjectURL(file)}
									alt="profile picture"
								/>
								<motion.button
									whileTap={{ scale: 1.1 }}
									whileHover={{ scale: 1.2 }}
									title="Remove Photo"
									onClick={deleteImage}
									className="absolute bottom-3 right-3 rounded-full p-2 md:p-5 bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
								>
									<MdDeleteOutline className="text-white" />
								</motion.button>
							</div>
						</>
					) : (
						<AssetUploader register={register} name="profilePhoto" />
					)}
				</div>
				<div className="w-full flex items-center justify-center">
					<motion.button
						disabled={loading}
						whileHover={{ scale: 1.1 }}
						className="ml-0 flex justify-center items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-orange-500 px-12 py-2 text-lg text-white"
						onClick={handleSubmit(onSubmit)}
					>
						Save
					</motion.button>
				</div>
			</div>
			<Alert
				description="Information was successfully updated!"
				setIsVisible={setAlertVisible}
				isVisible={alertVisible}
			/>
			{loading && <Loader />}
		</div>
	)
}

export default UpdateProfile
