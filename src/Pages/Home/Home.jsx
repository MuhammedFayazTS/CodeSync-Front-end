import HomeButtons from "components/custom/custom-home-buttons"
import { Icons } from "components/icons"


const Home = () => {

  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-center items-center">

      <h1 className="text-8xl font-bold mb-16 gradient-text">
        Code Verse
      </h1>

      <div className="z-10 flex gap-x-5">
        <HomeButtons
          text={'Create New'}
          desc={'start a new project'}
          icon={<Icons.Plus className="h-full w-full group-hover:rotate-45 transition-all duration-300 ease-in-out  dark:stroke-white" />}
          bgColor={'red-gradient'} />
        <HomeButtons
          text={'Create New'}
          desc={'start a new project'}
          icon={<Icons.ArrowLeft className="h-full w-full group-hover:rotate-45 transition-all duration-300 ease-in-out  dark:stroke-white" />}
          bgColor={'purple-gradient'} />
      </div>


    </section>
  )
}

export default Home