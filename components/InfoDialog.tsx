import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/16/solid'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  close: () => void
}

const InfoDialog = ({ children, isOpen, close }: Props) => {
  return (
    <Dialog open={isOpen} onClose={close} as="div" className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="rounded border bg-black max-w-2xl p-4 sm:p-16 font-roboto relative">
            <XMarkIcon
              onClick={close}
              className="block mb-4 sm:mb-0 sm:absolute top-6 left-6 cursor-pointer size-6"
            />

            <Dialog.Description>{children}</Dialog.Description>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default InfoDialog
