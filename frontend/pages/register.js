import Head from 'next/head'

export default function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <div className="container mx-auto flex">
        <div className="pl-20">
          <div className="text-3xl font-bold pt-20">Signup</div>
          <div className="pt-10">We do not share your personal details with anyone.</div>
        </div>
        <div className="flex flex-col p-10 pl-13 w-[50rem]">
          <input type="text" placeholder='First Name' className="pt-10" />
          <input type="text" placeholder='Last Name' className="pt-20" />
          <input type="text" placeholder='Email' className="pt-20" />
          <input type="password" placeholder='Password' className="pt-20" />
          <input type="password" placeholder='Confirm Password' className="pt-20" />
          <button className='text-white bg-pink-800 p-2 font-extralight mt-10'>Signup</button>
        </div>
      </div>

      <div className="">
      </div>
    </>
  )
}
