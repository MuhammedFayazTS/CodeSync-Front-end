import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "components/ui/button"
import { Separator } from "@/components/ui/separator"



const Sidebar = () => {

    return (
        <aside className='w-full h-screen flex flex-col  gap-y-5 p-5 text-white'>

            <div className="w-full text-xl font-bold text-center">
                Logo
            </div>

            <Separator />


            <div className='w-full flex flex-wrap justify-center gap-4'>
                {
                    Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="w-1/3 flex flex-col gap-1">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <span>Cn</span>
                        </div>

                    ))
                }
            </div>


            {/* buttons */}
            <div className="flex flex-col gap-y-3 mt-auto">
                <Button>COPY ROOM ID</Button>
                <Button variant={'destructive'}>LEAVE</Button>
            </div>

        </aside>
    )
}

export default Sidebar