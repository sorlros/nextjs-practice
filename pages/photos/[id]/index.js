import Image from "next/image"
import Link from "next/link"

export const Index = ({ photo }) => {
	const { title, url } = photo

	return (
		<div>
			<h2>Image {title}</h2>
			<Image width={500} height={500} src={url} alt={title} />
			<Link href="/photos">Go back</Link>
		</div>
	)
}

export const getStaticProps = async (context) => {
	const { id } = context.params
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
	const photo = await res.json()

	return {
		props: {
			photo,
		},
	}
}

export const getStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_end=10")
	const photos = await res.json()
	const ids = photos.map((photo) => photo.id)
	const paths = ids.map((id) => {
		return {
			params: { id: id.toString() },
		}
	})
	return {
		paths: paths,
		fallback: false,
	}
}

export default Index
