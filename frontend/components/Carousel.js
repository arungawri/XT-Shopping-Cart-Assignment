import { useState, useEffect } from 'react'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image"

const Carousel = () => {
	const [data, setData] = useState(null)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('http://localhost:5001/banners')
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
	}, [])

	if (isLoading) return <p>Loading...</p>
	if (!data) return <p>No Category data</p>

	return (
		<div className="container mx-auto border-b">
		<ResponsiveCarousel showArrows>
				{data.map((banner, index) => (
				<Image
					src={banner?.bannerImageUrl.replace("/static", "") ?? ""}
					alt={banner?.bannerImageAlt ?? ""}
					width={1000}
					height={300}
					key={index}
				/>
			))}
		</ResponsiveCarousel>
		</div>
	)
}

export default Carousel