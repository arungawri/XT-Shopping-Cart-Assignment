import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Categories() {
	const [data, setData] = useState(null)
	const [isLoading, setLoading] = useState(false)

	const handleButtonClick = (id) => {
		fetch('http://localhost:5001/addToCart', {
			method: 'POST'
		})
			.then((res) => res.json())
			.then(data => {
				console.log(data);
			});
	}

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
			<div className="grid grid-cols-4 gap-4">
			{data.map(product => (
				<div key={product.id} className="pl-4 py-4 border-b border-dashed">
					<div className="font-semibold">
						{product.name}
					</div>
					<Image src={product?.imageURL.replace("/static", "") ?? ""} width={300} height={300} alt="Product description" />
					<div className="bg-gray-100 p-2 font-normal">{product.description.substring(0, 120)}</div>
					<div className="flex flex-row items-center justify-between pt-2">
						<div className="">MRP Rs.{product.price}</div>
						<button onClick={() => handleButtonClick(product.id)} className="text-white bg-pink-800 p-2 px-2 font-extralight">Buy Now</button>
					</div>
				</div>
			))}
			</div>
		</div>
	)
}
