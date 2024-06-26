import React, { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import HomeButton from "components/custom/Home-Button-Card/custom-home-buttons";
import { Icons } from "components/icons";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import ThemeSwitch from "components/custom/Theme-switch/ThemeSwitch";

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
    <section className="relative h-[100dvh] w-full flex flex-col justify-center items-center relative z-20">

      <h1 className="text-8xl font-bold mb-16 gradient-text">CodeSync</h1>

      <span className="absolute top-5 right-5">
        <ThemeSwitch />
      </span>

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

export default Home;
