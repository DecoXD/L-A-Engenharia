/* eslint-disable */

const TestimonialCard = ({name,comment,imgSrc}) => {
  return (
    <div className="flex flex-col justify-center gap-4 shadow-xl border-2 border-blue-100 shadow-purple-500 w-full max-w[350px] min-h-80 p-10">
      <div className="flex items-center justify-between">
        <div className=" flex gap-6 items-center">
          <img src={imgSrc} alt={name} className="rounded-full"/>
          <div className="">
            <p className="uppercase font-bold">{name}</p>
              <div className="flex gap-1 mt-2">
              {
                [1,2,3,4,5].map(() =>{
                  return(
                    <img src="/assets/icons/star.svg" alt="" width={15}/>
                  )
                })
              }
              </div>
          </div>
        </div>
        <img src="/assets/icons/quote.svg" alt="" width={15}/>
      </div>
      <p>{comment}</p>
    </div>
  )
}

export default TestimonialCard