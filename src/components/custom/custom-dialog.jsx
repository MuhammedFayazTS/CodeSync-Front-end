import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function CustomDialog({ dialogTitle,open, setOpen, children, handleSubmit }) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveChanges = (e) => {
    handleSubmit(e);
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button type="button" variant={"outline"} onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSaveChanges}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
