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
  <button type="button" onClick={onClick} className="flex items-center gap-5">
    <div
      className={cn('md:size-8 size-4 border-[4px] border-white', `${checked && 'bg-white'}`)}
    />
    <p className="font-rubik uppercase md:text-[24px] text-[15px]">{label}</p>
  </button>
)

export default CheckboxLabel
