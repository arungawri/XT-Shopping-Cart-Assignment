import Image from 'next/image'

export default function Header() {
  return (
    <>
      <div className="">
        <div className="container mx-auto w-full">
          <Image src="/images/logo.png" width={10} height={10} />
          Home
          Products
          SignIn
          Regsiter
        </div>
      </div>
    </>
  )
}
