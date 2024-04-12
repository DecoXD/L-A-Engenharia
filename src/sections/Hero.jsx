
const Hero = () => {
  return (
    <section className=" min-h-screen bg-blue-100 flex flex-col pt-32 lg:pt-4 lg:flex-row lg:gap-0 gap-20 ">

      <div className="flex  items-center md:p-4 flex-1  lg:max-w-[47%] ">
        <div className=" p-10 lg:p-4 w-full flex flex-col lg:gap-10 gap-12 justify-center items-start  ">
          <h1 className="flex flex-col font-bold lg:text-6xl md:text-6xl sm:text-5xl text-[2.5rem] text-blue-700 ">
            <span>Serviços</span>
            <span>Manutenção e </span>
            <span>Reparo</span>
            </h1>
            <p className="opacity-85">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis doloremque illo eos eum, asperiores sequi minus, id a provident vero explicabo excepturi tempore maiores quos commodi delectus ipsam sint!</p>

        <a href="#contact" className="py-2 px-6 bg-normal-orange border-2 border-[#ff8c20] hover:bg-white hover:text-[#ff8c20] text-slate-100 font-semibold uppercase text-lg rounded-full ">Contacte-nos</a>
        </div>
      </div>

      <div className=" w-full flex items-end md:justify-center lg:justify-start flex-1   ">
        <img 
          src="/assets/images/men-hero.png" 
          alt="hero image" 
          width={600}        
        />
      </div>

    </section>
  )
}

export default Hero