const Question = ({ question }: { question: string }) => (
  <div className="flex items-center gap-2">
    <div className="size-1 rounded-full bg-white" />
    <p className="md:text-[24px] text-[18px] font-share  tracking-[-0.05rem]">{question}</p>
  </div>
)

export default Question
