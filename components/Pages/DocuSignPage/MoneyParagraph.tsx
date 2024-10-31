const MoneyParagraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-1 ml-auto">
      <span>$</span>
      <p className="font-rubik font-semibold text-[14px] md:text-[20px] ml-auto">
        {children}
      </p>
    </div>
  )
}
export default MoneyParagraph
