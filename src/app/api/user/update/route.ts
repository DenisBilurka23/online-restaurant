import { NextResponse } from 'next/server'
import { type User } from '../../../../../types'
import { connectDB } from '../../../../../lib/mongodb'
import UserModel from '../../../../../models/userModel'

export const PUT: (req) => Promise<NextResponse<User>> = async req => {
	try {
		const body = await req.json()
		await connectDB()

		const foundUser = await UserModel.findOne({ email: body.email })
		if (!foundUser) {
			return NextResponse.json({ error: 'User not found' }, { status: 404 })
		}

		console.log('bodyCheck: ', body)

		if (body.name) foundUser.name = body.name
		if (body.phoneNumber) foundUser.phoneNumber = body.phoneNumber
		if (body.streetAddress) foundUser.streetAddress = body.streetAddress
		if (body.apt) foundUser.apt = body.apt
		if (body.city) foundUser.city = body.city
		if (body.postalCode) foundUser.postalCode = body.postalCode

		await foundUser.save()

		return NextResponse.json(foundUser)
	} catch (error) {
		console.error('Error updating user:', error)
		return NextResponse.error()
	}
}
