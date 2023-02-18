export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full py-11 px-[3%] pointer-events-none">
      <a href="" className="text-4xl font-bold pointer-events-auto">
        SKULLS NFT
      </a>
      <a href="" className="pointer-events-auto">
        Cart (<span>0</span>)
      </a>
    </div>
  )
}
