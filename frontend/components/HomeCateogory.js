import React from 'react'
import Image from 'next/image'

const HomeCateogory = ({ category, index }) => {
	return (
		<div className="container mx-auto border-b pb-8">
			<div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-around px-3 sm:px-0`}>
			<Image src={category?.imageUrl.replace("/static", "") ?? ""} width={300} height={180} />
				<div className="flex flex-col items-center gap-3">
				<div className="">
					{category.name}
				</div>
				<div className="">
					{category.description}
				</div>
					<button className="text-white bg-pink-800 p-2 font-extralight">
					Explore {category.key}
				</button>
			</div>
		</div>
		</div>
	)
}

export default HomeCateogory;