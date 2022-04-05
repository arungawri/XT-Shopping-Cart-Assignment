import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="border-b drop-shadow-sm">
        <div className="container mx-auto w-full flex justify-between">
          <div className="flex items-end">
            <div className="cursor-pointer">
              <Link href="/">
                <Image src="/images/logo.png" width={180} height={70} />
              </Link>
            </div>
            <div className="ml-48 mb-2 text-gray-500 text-sm">
              <Link href="/">
                Home
              </Link>
            </div>
            <div className="pl-6 mb-2 text-gray-500 text-sm">
              <Link href="/plp">
                Products
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-stretch">
            <div className="flex">
              <div className="text-gray-500 text-sm pr-2">
                <Link href="/login">
                  SignIn
                </Link>
              </div>
              <div className="text-gray-500 text-sm">
                <Link href="/register">
                  Regsiter
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 h-full mt-2 pt-5 pl-5">
              0 items
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
