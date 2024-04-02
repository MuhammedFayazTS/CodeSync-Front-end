import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Icons } from "components/icons"



const Sidebar = ({ isCollapsed }) => {

    return (
        <aside
            data-collapsed={isCollapsed}
            className={`z-20 w-full h-screen flex flex-col  gap-y-5 p-5 data-[collapsed=true]:p-2 text-gray-950 dark:text-white dark:bg-zinc-900`}>

            <div className="w-full text-xl font-bold text-center">
                Logo
            </div>

            <Separator />


            <div data-collapsed={isCollapsed}
                className='w-full flex flex-row flex-wrap  justify-center gap-4 data-[collapsed=true]:flex-col data-[collapsed=true]:items-center'>
                {
                    Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} data-collapsed={isCollapsed}
                            className="w-1/3 flex flex-col gap-1 data-[collapsed=true]:w-fit">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <span data-collapsed={isCollapsed}
                                className="data-[collapsed=true]:hidden" >
                                Cn
                            </span>
                        </div>

                    ))
                }
            </div>


            {/* buttons */}
            <div data-collapsed={isCollapsed}
                className="flex flex-col gap-y-3 mt-auto">
                <Button className="gap-1" variant="default">
                    <span data-collapsed={isCollapsed}
                        className="data-[collapsed=true]:hidden">COPY ROOM ID</span>
                    <Icons.Copy />
                </Button>
                <Button className="gap-1" variant={'destructive'}>
                    <span data-collapsed={isCollapsed}
                        className="data-[collapsed=true]:hidden">LEAVE</span>
                    <Icons.Exit />
                </Button>
            </div>

        </aside>
    )
}

export default Sidebar