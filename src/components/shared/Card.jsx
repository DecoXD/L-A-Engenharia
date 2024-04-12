/* eslint-disable */

const Card = ({background,image,content,color="#000",hoverBg=null,title = null,}) => {
  return (
    <div className={` shadow-2xl w-full md:max-w-[22rem] max-h-64 min-h-64 flex flex-col gap-6 items-center justify-center bg-slate-100 ${hoverBg} group transition p-4 `}>
      <img src={image} className="group-hover:invert-white" alt="" width={95} />
      { title &&
          <h4 className={`text-xl font-bold uppercase text-center group-hover:invert-white`}>{title}</h4>
        }
      <p className={`font-semibold text-xs group-hover:invert-white text-center text-[${color}] uppercase`}>{content}</p>
    </div>
  )
}

export default Card