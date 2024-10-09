import { twMerge } from 'tailwind-merge'

type Props = {
  link?: string
  label?: string
  className?: string
  open?: () => void
}

const ReadHereLink = ({
  label = 'If confused, read here.',
  className = '',
  open,
}: Props) => {
  return (
    <button
      onClick={open}
      className="font-share text-2xl text-link underline max-w-fit"
    >
      <p className={twMerge(`pt-10`, className)}>{label}</p>
    </button>
  )
}

export default ReadHereLink
