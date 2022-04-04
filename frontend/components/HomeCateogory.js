import React from 'react'
import Image from 'next/image'

const HomeCateogory = ({ category, index }) => {
	return (
		<div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
			<Image src={category?.imageUrl.replace("/static", "") ?? ""} width={100} height={100} />
			<div className="">
				{category.name}
			</div>
			<div className="">
				{category.description}
			</div>
			<button>
				Explore {category.key}
			</button>
		</div>
	)
}

export default HomeCateogory;