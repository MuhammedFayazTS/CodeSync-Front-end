import { Icons } from "components/icons";
import { useNavigate } from "react-router";

const BackButton = ({posX,posY}) => {
    const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}
    className={`group hover:px-2 transition-all duration-300 ease-in-out
    absolute top-${posY} left-${posX} min-w-10 w-fit h-10 rounded-lg border border-gray-300 dark:border-gray-700 shadow inline-flex justify-center items-center cursor-pointer dark:bg-gray-950`}>
    <Icons.ArrowLeft className="h-4 w-4 group-hover:rotate-45 transition-all duration-300 ease-in-out  dark:stroke-white" />
    <span className="hidden group-hover:block scale-0 group-hover:scale-100 text-sm text-gray-600 dark:text-gray-50 transition-all duration-300 ease-in-out">Back</span>
</button>

  )
}

export default BackButton