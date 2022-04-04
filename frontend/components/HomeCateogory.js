import React from 'react'
import Image from 'next/image'

const HomeCateogory = ({ category, index }) => {
	return (
		<div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
			<Image src={category?.imageUrl.replace("/static", "") ?? ""} width={300} height={180} />
			<div className="">
				<div className="">
					{category.name}
				</div>
				<div className="">
					{category.description}
				</div>
				<button className="text-white bg-pink-800 p-1 font-thin">
					Explore {category.key}
				</button>
			</div>
		</div>
	)
}

export default HomeCateogory;