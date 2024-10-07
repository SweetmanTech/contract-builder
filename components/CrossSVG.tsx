import { SVGProps } from 'react'

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

export default Cross
