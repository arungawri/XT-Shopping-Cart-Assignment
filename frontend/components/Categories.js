import { useState, useEffect } from 'react'

export default function Categories() {
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
      <h1 className="text-3xl font-bold underline">
        Categories
      </h1>
      {data.map(category => (
        <div key={category.id}>
          <div className="">
            {category.name}
          </div>
        </div>
      ))}
    </>
  )
}
