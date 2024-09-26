import Link from 'next/link'

const ReadHereLink = ({
  link,
  label = 'If confused, read here.',
}: {
  link: string
  label?: string
}) => (
  <Link href={link} className="font-share text-2xl text-link underline">
    <p className="pt-10">{label}</p>
  </Link>
)

export default ReadHereLink
