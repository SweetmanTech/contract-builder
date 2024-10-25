interface LabeledParagraphsProps {
  heading: string
  paragraphs: { text: string; children?: { text: string }[] }[]
  serialNumber: number
}

const LabeledParagraphs: React.FC<LabeledParagraphsProps> = ({
  heading,
  paragraphs,
  serialNumber,
}) => {
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold mb-4">
        {serialNumber}. {heading}
      </h2>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <div
            key={index}
            style={{
              pageBreakInside: 'avoid',
            }}
            className="flex gap-2"
          >
            <span className=" ml-4">{String.fromCharCode(97 + index)}.</span>
            <div className="flex-1">
              {typeof paragraph === 'string' ? (
                <p>{paragraph}</p>
              ) : (
                <>
                  <p
                    dangerouslySetInnerHTML={{ __html: paragraph.text }}
                    className=""
                  />
                  {paragraph.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {paragraph.children.map((child, childIndex) => (
                        <div
                          key={childIndex}
                          style={{ pageBreakInside: 'avoid' }}
                          className="flex gap-2"
                        >
                          <span className="text-gray-600">
                            {childIndex + 1}.
                          </span>
                          <p>{child.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LabeledParagraphs
