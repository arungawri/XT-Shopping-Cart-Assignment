import Head from 'next/head'
import { useState, useEffect } from 'react'

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
		<>
			<Head>
				<title>Categories</title>
			</Head>

			<h1 className="text-3xl font-bold underline">
				Products
			</h1>
			{data.map(product => (
				<div key={product.id}>
					<div className="">
						{product.name}
					</div>
				</div>
			))}
		</>
	)
}
