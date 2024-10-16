import Image from 'next/image'

export default function Dot({
  image,
  className,
  onClick,
}: {
  image: string
  className: string
  onClick: () => void
}) {
  return (
    <div className="relative">
      <Image src={image} alt="" width={310} height={77} />

      <div
        className={`absolute top-1/2 -translate-y-1/2 size-6 bg-transparent cursor-pointer ${className}`}
        onClick={onClick}
      />
    </div>
  )
}
