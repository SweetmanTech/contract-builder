import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  className?: string
  disabled?: boolean
  onClick?: () => void
  children: any
}

const Button = ({
  className = '',
  onClick,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'font-rubik text-md border-danger rounded-md w-[200px] py-2 border-[1px] uppercase transiton duration-[200ms] hover:scale-[1.05]',
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
