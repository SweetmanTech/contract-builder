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
  <button type="button" onClick={onClick} className="flex items-center gap-3">
    <div
      className={cn('size-7 border border-white', `${checked && 'bg-white'}`)}
    />
    <p className="font-rubik text-xl uppercase">{label}</p>
  </button>
)

export default CheckboxLabel
