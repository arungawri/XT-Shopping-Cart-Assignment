import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { setIsCartOpen } from '../slices/cart'

export default function Header() {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <div className="border-b drop-shadow-sm">
        <div className="container mx-auto w-full flex justify-between">
          <div className="flex items-end">
            <div className="cursor-pointer">
              <Link href="/">
                <Image src="/images/logo.png" width={180} height={70} alt="Sabka Baazar" />
              </Link>
            </div>
            <div className="ml-48 mb-2 text-gray-500 text-sm hidden sm:block">
              <Link href="/">
                Home
              </Link>
            </div>
            <div className="pl-6 mb-2 text-gray-500 text-sm hidden sm:block">
              <Link href="/plp">
                Products
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-stretch">
            <div className="hidden sm:flex">
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
            <div onClick={() => dispatch(setIsCartOpen(true))} className="bg-gray-100 h-full mt-2 pt-5 p-2">
              <Image src="/images/cart.svg" width={15} height={15} />
              {cartItems.length} item(s)
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
