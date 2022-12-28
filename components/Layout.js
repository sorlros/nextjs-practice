import Nav from "./Nav"
import Head from "next/head"

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div>{children}</div>
		</>
	)
}

export default Layout
