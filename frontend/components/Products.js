import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Categories() {
	const [data, setData] = useState(null)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('http://localhost:5001/products')
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
	}, [])

	if (isLoading) return <p>Loading...</p>
	if (!data) return <p>No Product data</p>

	return (
		<div>
			<h1 className="text-3xl font-bold underline">
				Products
			</h1>
			<div className="grid grid-cols-4 gap-4">
			{data.map(product => (
				<div key={product.id} className="">
					<div className="">
						{product.name}
					</div>
					<Image src={product?.imageURL.replace("/static", "") ?? ""} width={100} height={100} />
					<div className="">{product.description}</div>
					<div className="">{product.price}</div>
					<button>Buy Now</button>
				</div>
			))}
			</div>
		</div>
	)
}
