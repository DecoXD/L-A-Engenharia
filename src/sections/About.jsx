
const About = () => {
  return (
    <div className="">
      <section className="flex lg:flex-row flex-col items-center p-16 gap-10">
        <div className=" flex flex-1 flex-col gap-10 justify-center items-start md:p-14 ">
          <h2 className="md:text-4xl text-3xl uppercase font-bold">Sobre nós</h2>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, saepe distinctio nam non sapiente ut accusantium facere ex repellendus, quisquam labore laudantium libero minus quis ab beatae error optio. Sequi.</p>
          <a className="py-4 px-8 bg-blue-700 text-md font-bold uppercase text-slate-100 border-2 hover:bg-slate-100 hover:text-black border-blue-700" href="#contact">
            Fale conosco
          </a>
        </div>

        <div className="flex-1">
          <img src="/assets/images/about-img.jpg" alt="about image" width={700}/>
        </div>
    </section>

    <section className="flex items-center justify-center bg-blue-100 p-16">
      <div className="flex-1 md:flex justify-center hidden ">
        <img src="/assets/images/about-img-2.png" alt="second about image" width={500} />
      </div>
      <div className="flex-1 flex flex-col gap-10 justify-center items-start">
        <h2 className="md:text-4xl text-3xl text-blue-700 font-bold uppercase">Nós fornecemos serviços profissionais</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, neque! Velit aliquid qui voluptatum deleniti maiores totam architecto quia quisquam voluptate voluptas voluptatibus, cupiditate autem recusandae porro eos reprehenderit? Veritatis?</p>
        <a className="py-4 px-8 bg-normal-orange text-md font-bold uppercase text-slate-100 border-2 hover:bg-slate-100 hover:text-black border-[#ff8c20]" href="#contact">
          Fale conosco
        </a>
        
      </div>
    </section>
    </div>
  )
}

export default About