import Link from 'next/link'

const ReadHereLink = ({ link }: { link: string }) => (
  <Link href={link} className="font-share text-2xl text-link underline">
    <p className="pt-10">If confused, read here.</p>
  </Link>
)

export default ReadHereLink
