import { type FunctionComponent } from 'react'

const Title: FunctionComponent<{ children }> = ({ children, styles }) => (
	<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-30">
		<div className="mx-auto max-w-12xl lg:mx-0">
			<h2 className={`font-bold tracking-tight text-center ${styles}`}>{children}</h2>
		</div>
	</div>
)

export default Title
