
const Services = () => {
  return (
   <section className=" flex lg:mt-0 mt-24  flex-wrap p-8 gap-8 w-full justify-center lg:-translate-y-[80px]   ">
    
    <div className=" shadow-2xl w-full md:max-w-[22rem] max-h-64 min-h-64 flex flex-col gap-6 items-center justify-center bg-slate-100 hover:bg-normal-orange group transition  ">
      <img src="/assets/icons/tools.svg" className="group-hover:invert-white" alt="" width={95} />
      <p className="font-semibold text-xl group-hover:invert-white text-[#837fb8] uppercase">reparo</p>
    </div>
    <div className=" shadow-2xl w-full md:max-w-[22rem] max-h-64 min-h-64 flex flex-col gap-6 items-center justify-center bg-slate-100  hover:bg-normal-orange group transition ">
      <img src="/assets/icons/improve.svg" className="group-hover:invert-white" alt="" width={95} />
      <p className="font-semibold text-xl group-hover:invert-white text-[#837fb8] uppercase">melhoria</p>

    </div>
    <div className=" shadow-2xl w-full md:max-w-[22rem] max-h-64 min-h-64 flex flex-col gap-6 items-center justify-center bg-slate-100  hover:bg-normal-orange group  transition  ">
      <img src="/assets/icons/home-icon.svg" className="group-hover:invert-white" alt="" width={95} />
      <p className="font-semibold text-xl group-hover:invert-white text-[#837fb8] uppercase">manutenção</p>
    </div>
    
  
   </section>
  )
}

export default Services