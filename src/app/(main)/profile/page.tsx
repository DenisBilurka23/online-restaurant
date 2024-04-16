'use client'

import { type SubmitHandler, useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import AssetUploader from '@/app/components/Upload'
import Image from 'next/image'

interface Inputs {
	displayName: string
	phoneNumber: string
}

const UpdateProfile = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data)
	const inputOptions = { displayNameLength: 5, phoneNumberLength: 10 }
	const watchFile = watch('profilePhoto')
	const [file, setFile] = useState(null)

	useEffect(() => {
		const selectedFile = watchFile ? watchFile[0] : null
		if (selectedFile) {
			const reader = new FileReader()
			reader.onload = () => setFile(selectedFile)
			reader.readAsDataURL(selectedFile)
		}
	}, [watchFile])

	const deleteImage = () => setFile(null)

	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="border w-full md:w-[60%] flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4 mt-8 mg:mt-10">
				<div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
					<input
						{...register<keyof Inputs>('displayName', {
							required: 'Display Name is required',
							minLength: {
								value: inputOptions.displayNameLength,
								message: `Display Name must be at least ${inputOptions.displayNameLength} characters long`
							}
						})}
						placeholder="Enter full name"
						autoFocus
						className="h-full w-full bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
					/>
					{errors.displayName && <span className="text-red-500 text-sm">{errors.displayName.message}</span>}
				</div>
				<div className="w-full flex flex-col md:flex-row items-center gap-3">
					<input
						{...register<keyof Inputs>('phoneNumber', {
							required: 'Phone number is required',
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
						whileHover={{ scale: 1.1 }}
						className="ml-0 flex justify-center items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-orange-500 px-12 py-2 text-lg text-white"
						onClick={handleSubmit(onSubmit)}
					>
						Save
					</motion.button>
				</div>
			</div>
		</div>
	)
}

export default UpdateProfile
