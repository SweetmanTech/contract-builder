import { SVGProps, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const Cross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
      stroke="#D8D8D8"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ReadHereLink = ({
  link,
  label = 'If confused, read here.',
  className = '',
}: {
  link: string
  label?: string
  className?: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Link
        href={link}
        onClick={() => setIsOpen(true)}
        className="font-share text-2xl text-link underline"
      >
        <p className={twMerge(`pt-10`, className)}>{label}</p>
      </Link>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        as="div"
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="rounded border bg-black max-w-2xl p-4 md:p-16 font-roboto relative">
              <Cross
                className="absolute top-6 left-6 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
              <Dialog.Description>
                In music industry, there are two primary types of works:{' '}
                <b>Musical Compositions</b> and{' '}
                <b>
                  Sound Recordings <s>copyright and</s>
                </b>{' '}
                <b>
                  <s>publishing rights.</s>
                </b>{' '}
                These two kinds of works have their own copyright.
                <ol className="list-decimal list-outside ml-6 mb-8">
                  <li>
                    <b>
                      Copyright in Musical Composition (Publishing Rights or
                      Composition Rights):
                    </b>{' '}
                    Relate to the “song” or underlying composition—the lyrics
                    and melody of a song, independent of any particular
                    recording. These rights are divided between the{' '}
                    <b>songwriter</b> (or composer) and the{' '}
                    <b>music publisher.</b> The publisher manages the
                    songwriter’s composition by licensing it for use, collecting
                    royalties, and ensuring it is properly credited. The key
                    components of publishing rights include{' '}
                    <b>performance rights, mechanical rights,</b> and
                    synchronization rights (for use in films, TV, etc.).
                  </li>
                  <li>
                    <b>Copyright in Sound Recordings (MASTER Rights):</b>{' '}
                    Pertains to the ownership of a particular recording of a
                    performance of a song. Whoever owns the master rights
                    controls the use, distribution, reproduction, and
                    performance of that specific recording. These rights
                    typically belong to the record label or the artist who
                    financed the production of the recording, though they can be
                    sold or licensed.
                  </li>
                </ol>
                Both rights are crucial for monetizing and legally protecting
                music. The copyright controls the use of a specific recording,
                while publishing rights control the use of the song&#39;s
                composition.
              </Dialog.Description>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ReadHereLink
