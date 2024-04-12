import Card from "../components/shared/Card"
import { serviceCards } from "../constants"

const Busines = () => {
  return (
    <section className="flex flex-col gap-12">
      <h3 className="text-4xl font-bold text-center uppercase">Nossos Serviços</h3>
      <div className="flex gap-8 justify-center items-center flex-wrap w-full p-10">
        {
          serviceCards.map((item,idx) => <Card 
          key={idx} color={item.color} 
          background={item.background} 
          content={item.content}
          image={item.image}
          title={item.title}
          hoverBg={item.hover}
          />)
        }
      </div>
      <a className="py-[.8rem] px-8 bg-blue-700 text-md font-bold uppercase text-slate-100 border-2 hover:bg-slate-100 hover:text-black border-blue-700 m-auto" href="#contact">
          Veja mais
        </a>
    </section>
  )
}

export default Busines