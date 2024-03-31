import { useNavigate } from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import { CustomDialog } from "./custom-dialog"
import { useRef } from "react"


const HomeButtons = ({ bgColor, text, icon, desc }) => {

  const navigate = useNavigate()
  
  const btnRef = useRef(null)
  
  const handleClick = (e) => {
    e.preventDefault();
    btnRef.current.click();
  }
  

  return (
    <section onClick={handleClick}
      className={`group w-72 h-48 p-5 rounded-md flex flex-col items-start justify-between  gap-y-3 cursor-pointer text-gray-50 ${bgColor}`}>

      <CustomDialog>
        <button ref={btnRef}
          className=" group-hover:rotate-45 transition-all duration-300 ease-in-out
       w-10 h-10 p-1 inline-flex justify-center items-center rounded-md text-2xl backdrop-blur-xl shadow border border-white/30  text-white bg-white/10">
          <span className="transition-all duration-300 delay-75 ease-in-out group-hover:scale-110 group-hover:rotate-90" >
            {icon}
          </span>
        </button>
      </CustomDialog>

      <div className="flex flex-col ">
        <span className="text-xl font-bold transition-all duration-300 ease-in-out group-hover:translate-x-1">
          {text}
        </span>
        <span className="text-base text-gray-200 transition-all duration-300 delay-75 ease-in-out group-hover:translate-x-2">
          {desc}
        </span>
      </div>

    </section>

  )
}

export default HomeButtons