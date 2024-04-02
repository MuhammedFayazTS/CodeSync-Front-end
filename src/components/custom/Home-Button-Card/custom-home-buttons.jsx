import React, { useState } from "react";
import { CustomDialog } from "../Dialog/custom-dialog";
import CustomDialogForm from "../Dialog/custom-dialog-form";

const HomeButtons = ({ bgColor, text, icon, desc, roomDetails, handleChange, handleSubmit }) => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const renderDialog = () => {
    if (!roomDetails) return null;
    return (
      <CustomDialog open={open} setOpen={setOpen} handleSubmit={handleSubmit} dialogTitle={"Room Details"} >
        <CustomDialogForm handleChange={handleChange} roomDetails={roomDetails} handleSubmit={handleSubmit} />
      </CustomDialog>
    );
  };

  return (
    <>
      <section onClick={toggleDialog} className={`group w-72 h-48 p-5 rounded-md flex flex-col items-start justify-between gap-y-3 cursor-pointer text-gray-50 ${bgColor}`}>
        <button className="group-hover:rotate-45 transition-all duration-300 ease-in-out w-10 h-10 p-1 inline-flex justify-center items-center rounded-md text-2xl backdrop-blur-xl shadow border border-white/30 text-white bg-white/10">
          <span className="transition-all duration-300 delay-75 ease-in-out group-hover:scale-110 group-hover:rotate-90">{icon}</span>
        </button>
        <div className="flex flex-col">
          <span className="text-xl font-bold transition-all duration-300 ease-in-out group-hover:translate-x-1">{text}</span>
          <span className="text-base text-gray-200 transition-all duration-300 delay-75 ease-in-out group-hover:translate-x-2">{desc}</span>
        </div>
      </section>
      {renderDialog()}
    </>
  );
};

export default HomeButtons;
