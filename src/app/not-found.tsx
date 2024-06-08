import Layout from '@/app/(main)/layout'
import Title from '@/app/components/Title'

const NotFound = () => (
	<Layout>
		<div className="flex flex-col justify-center items-center h-[350px]">
			<Title className="flex-grow">Page is not found</Title>
		</div>
	</Layout>
)

export default NotFound
