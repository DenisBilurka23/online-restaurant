type Req = (url: any, body?: any, options?: any) => Promise<any>

export const REQUEST: Req = async (url, body, options) => {
	const res = await fetch(`${process.env.BASE_URL}/${url}`, {
		next: { revalidate: 1800 },
		body,
		method: options?.method || 'GET',
		headers: {
			Authorization: 'Bearer '
		}
	})
	return res
}
