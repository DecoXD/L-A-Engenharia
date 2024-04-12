/*eslint-disable */

const Topbar = ({navItens}) => {
  return (
    <nav className="flex absolute px-10 py-8 justify-between w-full items-center">
      <div className="logo">
       <h1 className="text-4xl font-bold bounce text-blue-700 uppercase">logo</h1>
      </div>

      <ul className="flex gap-4 md:gap-14 ">
        {
          navItens.map((item,idx) =>{
           return (
              <li key={idx}>
              <a href={item.href} className="cursor-pointer hover:text-blue-700 font-semibold">
                {item.label}
                </a>
            </li>
           )

          })
        }
      </ul>
      
    </nav>
  )
}

export default Topbar