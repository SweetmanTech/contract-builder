interface IdentificationSectionProps {
  title: string
  content: React.ReactNode
}

const IdentificationSection: React.FC<IdentificationSectionProps> = ({
  title,
  content,
}) => (
  <div className="flex flex-col gap-2">
    <p className="font-roboto_medium text-2xl">{title}</p>
    <p className="font-robot text-2xl">{content}</p>
  </div>
)

export default IdentificationSection
