import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
	{
		phoneNumber: { type: String, required: true, minLength: 10 },
		email: { type: String, required: true, minLength: 5, maxLength: 30, unique: true },
		password: { type: String, required: true }
	},
	{ timestamps: true }
)

export default models.User || model('User', userSchema)
