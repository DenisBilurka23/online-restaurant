type Req = (url: string, body?: any, options?: { method: string }) => Promise<any>

export const REQUEST: Req = async (url, body, options) => {
	try {
		const response = await fetch(`${process.env.BASE_URL}/${url}`, {
			method: options?.method ?? 'GET',
			body,
			headers: {
				'Content-Type': 'application/json', // Add content type header
				Authorization: 'Bearer ' // Add your Authorization header value
			}
		})
		return response
	} catch (e) {
		console.log('e: ', e)
	}
}
