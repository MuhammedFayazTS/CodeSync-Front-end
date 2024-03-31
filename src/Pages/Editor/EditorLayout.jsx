import Sidebar from "components/layout/Sidebar"
import { useNavigate, useParams } from "react-router-dom"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import CodeEditor from "../../components/Code-editor/Editor"
import { useEffect, useMemo, useState } from "react"
import ACTIONS from "../../services/Actions"
import { io } from "socket.io-client"


const EditorLayout = () => {

    const { id: roomId } = useParams()
    const navigate = useNavigate()
    const [isCollapsed, setIsCollapsed] = useState(false)

    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket']
    }

    const socket = useMemo(() => io(import.meta.env.VITE_BACKEND_URL, options), [])

    useEffect(() => {


        socket.on("connect", () => { console.log("connection established: " + socket.id) })
        // error handling
        socket.on("connection_error", (err) => handleError(err))
        socket.on("connection_failed", (err) => handleError(err))

        socket.on("welcome", (s) => {
            console.log(s)
        })

        socket.emit(ACTIONS.JOIN, {
            roomId
        })

        const handleError = (err) => {
            console.log('socket error', err)
            alert('socket connection failed,try again later')
            navigate('/')
        }

        return () => socket.disconnect()
    }, [])

    return (
        <>
            <ResizablePanelGroup direction="horizontal" className="h-screen bg-zinc-900" >

                <ResizablePanel
                    className="z-20"
                    defaultSize={15}
                    collapsedSize={5}
                    collapsible={true}
                    minSize={10}
                    maxSize={20}
                    onCollapse={() => {
                        setIsCollapsed(true)
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                            true
                        )}`
                    }}
                    onExpand={() => {
                        setIsCollapsed(false)
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                            false
                        )}`
                    }}
                >

                    <Sidebar isCollapsed={isCollapsed} />

                </ResizablePanel>

                <ResizableHandle className="z-20" withHandle />

                <ResizablePanel>
                    <CodeEditor />
                </ResizablePanel>

            </ResizablePanelGroup>
        </>
    )
}

export default EditorLayout