import Sidebar from "components/layout/Sidebar"
import { useParams } from "react-router-dom"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import CodeEditor from "./Code-editor/Editor"



const EditorLayout = () => {
    const { id } = useParams()


    return (
        <>
            <ResizablePanelGroup direction="horizontal" className="h-screen bg-zinc-900" >

                <ResizablePanel defaultSize={15} minSize={5} maxSize={50}>
                    <Sidebar />
                </ResizablePanel>

                <ResizableHandle withHandle />

                <ResizablePanel>
                    <CodeEditor />
                </ResizablePanel>

            </ResizablePanelGroup>
        </>
    )
}

export default EditorLayout