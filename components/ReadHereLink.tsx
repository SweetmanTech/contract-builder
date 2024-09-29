import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const ReadHereLink = ({
  link,
  label = 'If confused, read here.',
  className = '',
}: {
  link: string
  label?: string
  className?: string
}) => (
  <Link href={link} className="font-share text-link underline sm:text-2xl">
    <p className={twMerge(`pt-10`, className)}>{label}</p>
  </Link>
)

export default ReadHereLink
