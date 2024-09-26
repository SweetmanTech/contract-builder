import { twMerge } from 'tailwind-merge'

const SubmitButton = ({
  className,
  onClick,
}: {
  className: string
  onClick: () => void
}) => {
  return (
    <button
      className={twMerge(
        'font-rubik text-md border-danger rounded-md w-[200px] py-2 border-[1px] mt-10',
        className,
      )}
      onClick={onClick}
    >
      SUBMIT
    </button>
  )
}

export default SubmitButton
