import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { languages } from "content/data";

const CustomDialogForm = ({ handleChange, roomDetails }) => {

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
                        {languages.map((language) => (
                            <SelectItem key={language.name} value={language.name}>
                                {language.name}
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
