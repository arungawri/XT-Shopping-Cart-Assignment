import Head from 'next/head'

export default function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <div className="">
        Signup
        We do not share your personal details with anyone.
      </div>
      <div className="">
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
        <button>Signup</button>
      </div>
    </>
  )
}
