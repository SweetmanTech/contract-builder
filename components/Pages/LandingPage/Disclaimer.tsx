import InfoDialog from '@/components/InfoDialog'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { useRouter } from 'next/navigation'

type Props = {
  isOpen: boolean
  close: () => void
}

const Disclaimer = ({ isOpen, close }: Props) => {
  const { push } = useRouter()

  return (
    <InfoDialog isOpen={isOpen} close={close}>
      <p className="mb-4">
        <b>DISCLAIMER:</b> Our intention is to provide a platform for self-help.
        We provide a draft of a contract that should be meticulously reviewed by
        each of the parties willing to make an agreement. The information given
        in this service is provided for your private use and does not constitute
        legal advice. We do not review any information you provide us for legal
        accuracy or sufficiency, draw legal conclusions, provide opinions about
        your usage, or apply the law to the facts of your situation.
      </p>
      <p className="mb-4">
        If you don’t understand the terms or consequences of the draft we
        provide, or need legal advice for a specific problem, we encourage you
        to consult with a licensed attorney. The draft provided by this service
        is not a substitute for legal advice from a qualified attorney licensed
        to practice in an appropriate jurisdiction.
      </p>
      <p>
        This draft is limited to the general principles of copyright law. If you
        are interested in learning more about how the MESA system can help you,
        please get in touch at <b>contact@mesawallet.io</b>.
      </p>
      <button
        type="button"
        className="flex ml-auto items-center bg-grey-dark border-2 border-white rounded-lg py-2 px-6 mt-10"
        onClick={() => push('/contract-builder')}
      >
        <span>Proceed</span> <ArrowRightIcon className="size-4 ml-2" />
      </button>
    </InfoDialog>
  )
}

export default Disclaimer
