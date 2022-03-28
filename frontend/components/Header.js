import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="">
        <div className="container mx-auto w-full flex justify-between">
          <div className="">
            <Image src="/images/logo.png" width={100} height={40} />
            <Link href="/">
              Home
            </Link>
            <Link href="/plp">
              Products
            </Link>
          </div>
          <div className="">
            <Link href="/login">
              SignIn
            </Link>
            <Link href="/register">
              Regsiter
            </Link>
            <div className="">
              Cart
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
