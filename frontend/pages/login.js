import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="">Login</div>
      <div className="">Get access to your Orders, Wishlist and Recommendations</div>

      <div className="">
        <input type="text" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button>Login</button>
      </div>
    </>
  )
}
