import { Schema, model, models } from 'mongoose'

const userSchema = new Schema(
	{
		phoneNumber: { type: String, required: true },
		email: { type: String, required: true, minLength: 5, maxLength: 30, unique: true },
		username: { type: String, required: true, minLength: 5, maxLength: 30, unique: true },
		password: { type: String, required: true },
		profilePicture: { type: String }
	},
	{ timestamps: true }
)

export default models.User || model('User', userSchema)
