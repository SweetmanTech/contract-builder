import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown'
import { ChevronDownIcon } from 'lucide-react'

export default function CollaboratorDropdown({
  contributionType,
  options,
  setContributionType,
}: {
  contributionType: string
  options: string[]
  setContributionType: (value: string) => void
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex justify-between w-full items-center text-left bg-black text-[#9ca3af] font-rubik rounded-md border-white border p-2 cursor-pointer">
          {contributionType ? contributionType : 'Select options'}
          <ChevronDownIcon className="size-5 text-white" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-black w-80 font-rubik">
        <DropdownMenuRadioGroup
          value={contributionType}
          onValueChange={setContributionType}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem key={option} value={option}>
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
