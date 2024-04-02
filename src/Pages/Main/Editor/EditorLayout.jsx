import React, { useEffect, useState, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import HomeButton from "components/custom/custom-home-buttons";
import { Icons } from "components/icons";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Sidebar from "components/layout/Sidebar";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "components/Code-editor/Editor";
import { useParams } from "react-router-dom";
import ACTIONS from "services/ScoketActions";
import { io } from "socket.io-client";

const Home = () => {
    const initialState = { roomId: "", language: "" };
    const [roomDetails, setRoomDetails] = useState(initialState);
    const navigate = useNavigate();
    const { toast } = useToast();

    useEffect(() => {
        setRoomDetails((prev) => ({ ...prev, roomId: uuidV4() }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoomDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if any required field is empty
        if (roomDetails.roomId === "" || roomDetails.language === "") {
            toast({
                variant: "destructive",
                title: "Validation Error",
                description: "Please fill in all the details.",
            });
            return;
        }
        // Proceed with form submission navigate to to code editor page
        navigate(`/code-editor/${roomDetails.roomId}`, {
            state: {
                language: roomDetails.language,
            },
        });

        // Reset form fields to initial state
        setRoomDetails(initialState);
    };

    return (
        <section className="relative h-[100dvh] w-full flex flex-col justify-center items-center z-20">
            <h1 className="text-8xl font-bold mb-16 gradient-text">CodeSync</h1>
            <div className="z-10 flex gap-x-5">
                <HomeButton
                    text="Create New"
                    desc="Start a new project"
                    icon={<Icons.Plus className="h-full w-full group-hover:rotate-45 transition-all duration-300 ease-in-out dark:stroke-white" />}
                    bgColor="red-gradient"
                    roomDetails={roomDetails}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <HomeButton
                    text="Join Room"
                    desc="Join an existing project"
                    icon={<Icons.ArrowLeft className="h-full w-full group-hover:rotate-45 transition-all duration-300 ease-in-out dark:stroke-white" />}
                    bgColor="purple-gradient"
                />
            </div>
        </section>
    );
};

const EditorLayout = () => {
    const { id: roomId } = useParams();
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const options = {
        "force new connection": true,
        reconnectionAttempt: "Infinity",
        timeout: 10000,
        transports: ["websocket"],
    };

    const socket = useMemo(() => io(import.meta.env.VITE_BACKEND_URL, options), []);

    useEffect(() => {
        socket.on("connect", () => {
            console.log("connection established: " + socket.id);
        });
        // error handling
        socket.on("connection_error", (err) => handleError(err));
        socket.on("connection_failed", (err) => handleError(err));

        socket.on("welcome", (s) => {
            console.log(s);
        });

        socket.emit(ACTIONS.JOIN, {
            roomId,
        });

        const handleError = (err) => {
            console.log("socket error", err);
            toast({
                variant: "destructive",
                title: "Socket Error",
                description: "Socket connection failed. Please try again later.",
            });
            navigate("/");
        };

        return () => socket.disconnect();
    }, []);

    return (
        <>
            <ResizablePanelGroup direction="horizontal" className="h-screen bg-zinc-900">
                <ResizablePanel
                    className="z-20"
                    defaultSize={15}
                    collapsedSize={5}
                    collapsible={true}
                    minSize={10}
                    maxSize={20}
                    onCollapse={() => {
                        setIsCollapsed(true);
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`;
                    }}
                    onExpand={() => {
                        setIsCollapsed(false);
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`;
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
    );
};

export { Home, EditorLayout };
