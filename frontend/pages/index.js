import Head from 'next/head'
import Image from "next/image"
import { useState, useEffect } from 'react'
import HomeCateogory from '../components/HomeCateogory'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:5001/categories')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Category data</p>

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h1 className="text-3xl font-bold underline">
        Home
      </h1>
      <div className="text-xl">
        Carousel
      </div>
      <Carousel showArrows>
        <Image src={"/images/offers/offer1.jpg"} width={1000} height={300} />
        <Image src={"/images/offers/offer2.jpg"} width={1000} height={300} />
        <Image src={"/images/offers/offer3.jpg"} width={1000} height={300} />
        <Image src={"/images/offers/offer4.jpg"} width={1000} height={300} />
        <Image src={"/images/offers/offer5.jpg"} width={1000} height={300} />
      </Carousel>
      <h1 className="text-xl">
        Grid/Component Alternate left right
      </h1>
      {data.map((category, index) => (
        <HomeCateogory category={category} key={category.id} index={index} />
      ))}
    </>
  )
}
