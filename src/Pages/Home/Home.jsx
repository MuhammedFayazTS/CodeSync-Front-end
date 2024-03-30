import HomeButtons from "components/ui/custom-home-buttons"




const Home = () => {
  return (
    <section className="relative h-[100dvh] w-full flex justify-center items-center bg-[#06080b]">
      <div className="z-0 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />



      <div className="z-10 flex gap-x-5">
        <HomeButtons text={'Create New'} desc={'start a new project'} icon={"https://img.icons8.com/external-becris-lineal-becris/64/FFFFFF/external-add-mintab-for-ios-becris-lineal-becris-2.png"} bgColor={'red-gradient'} />
        <HomeButtons text={'Create New'} desc={'start a new project'} icon={'*'} bgColor={'purple-gradient'} />
      </div>


    </section>
  )
}

export default Home