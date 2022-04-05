import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container mx-auto flex">
        <div className="pl-20">
          <div className="text-3xl font-bold pt-20">Login</div>
          <div className="pt-10">Get access to your Orders, Wishlist and Recommendations</div>
        </div>
        <div className="flex flex-col p-10 pl-13 w-[50rem]">
          <input type="text" placeholder='Email' className="pt-10" />
          <input type="password" placeholder='Password' className="pt-20" />
          <button className='text-white bg-pink-800 p-2 font-extralight mt-10'>Login</button>
        </div>
      </div>
    </>
  )
}
