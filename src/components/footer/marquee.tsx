

interface MarqueeTextProps{
    txt1:string,
    txt2?:string,
    txt3?:string
}
export const MarqueeText = ({
    txt1,
   
}:MarqueeTextProps) => {
  return (
    <div className="sliding-text-container">
      <div className="sliding-text ">
        {txt1}
      </div>
    </div>
  )
}
