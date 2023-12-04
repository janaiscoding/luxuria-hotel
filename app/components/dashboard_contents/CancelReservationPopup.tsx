import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CancelReservationPopup = ({
  onDelete,
  booking_id,
}: {
  onDelete: (id: number) => void;
  booking_id: number;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="border border-slate-200 p-2 basis-full hover:cursor-pointer hover:text-orange-600">
        Cancel
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will cancel your reservation.
          </DialogDescription>
          <div className="flex gap-2 justify-evenly my-4">
            <DialogClose asChild>
              <button
                className="border border-solid py-2 px-4 bg-neutral-900 text-slate-50 hover:bg-neutral-800 rounded-md"
                onClick={() => onDelete(booking_id)}
              >
                Yes
              </button>
            </DialogClose>

            <DialogClose asChild>
              <button className="border border-solid py-2 px-4 bg-neutral-900 text-slate-50 hover:bg-neutral-800 rounded-md">
                NO
              </button>
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CancelReservationPopup