export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-12 pointer-events-none HEADER sm:p-5">
      <a href="" className="text-4xl font-bold pointer-events-auto sm:text-2xl">
        SKULLS NFT
      </a>
      <a href="" className="text-2xl pointer-events-auto CART sm:text-xl">
        Cart [<span>0</span>]
      </a>
    </div>
  )
}
