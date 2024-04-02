import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LANGUAGE_VERSIONS } from "content/constants";
// import { languages } from "content/data";

const CustomDialogForm = ({ handleChange, roomDetails }) => {

    // languages
    const languages = Object.entries(LANGUAGE_VERSIONS)

    // for select field on change
    const handleSelectChange = (value) => {
        handleChange({
            target: {
                name: "language",
                value: value,
            },
        });
    };

    return (
        <form className="grid gap-4 py-4 text-zinc-600 dark:text-zinc-300">
            <FormField label="Room Id" id="roomId">
                <Input
                    id="roomId"
                    name="roomId"
                    placeholder="xxx-xxx-xxx-xxx-xxx"
                    value={roomDetails.roomId}
                    onChange={handleChange}
                />
            </FormField>

            <FormField label="Language" id="language">
                <Select id="language" name="language" onValueChange={handleSelectChange} triggerClassName="w-[180px]">
                    <SelectTrigger as="div">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        {languages.map(([language,version]) => (
                            <SelectItem key={language} value={language}>
                                {language} &nbsp;
                                <span className="ml-auto text-zinc-700 dark:text-zinc-500">{version}</span>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </FormField>
        </form>
    );
};

const FormField = ({ label, children, id }) => {
    return (
        <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor={id} className="text-left">
                {label}
            </Label>
            {children}
        </div>
    );
};

export default CustomDialogForm;
