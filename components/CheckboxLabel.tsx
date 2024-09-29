import { twMerge as cn } from 'tailwind-merge'

const CheckboxLabel = ({
  checked,
  onClick,
  label,
}: {
  checked: boolean
  onClick: () => void
  label: string
}) => (
  <button onClick={onClick} className="flex items-center gap-3 text-left">
    <div className={cn('size-7 border border-white', `${checked && 'bg-white'}`)} />
    <p className="font-rubik uppercase sm:text-xl">{label}</p>
  </button>
)

export default CheckboxLabel
