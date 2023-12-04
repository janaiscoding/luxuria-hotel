import { SetStateAction } from "react";
import ArrowUp from "../ui/arrow-up";
import ArrowDown from "../ui/arrow-down";
// const sorterMap = {
//     "asc-arrival": "arrival_date",
//     "desc-arrival": "arrival_date DESC",
//     "asc-departure": "departure_date",
//     "desc-departure": "departure_date DESC",
//     "asc-guests-number": "guests_number",
//     "desc-guests-number": "guests_number DESC",
//   };

const Columns = ({
  sortParam,
  setSortParam,
}: {
  sortParam: string;
  setSortParam: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex text-center bg-slate-400 text-slate-800">
      <div className="border border-slate-800 p-2 basis-full flex gap-1 items-center justify-center">
        <p>Arriving</p>
        <div className="hover:cursor-pointer">
          {sortParam === "asc-arrival" ? (
            <div onClick={() => setSortParam("desc-arrival")}>
              <ArrowUp />
            </div>
          ) : (
            <div onClick={() => setSortParam("asc-arrival")}>
              <ArrowDown />
            </div>
          )}
        </div>
      </div>
      <div className="border border-slate-800 p-2 basis-full flex gap-1 items-center justify-center">
        <p>Departure</p>
        <div className="hover:cursor-pointer">
          {sortParam === "asc-departure" ? (
            <div onClick={() => setSortParam("desc-departure")}>
              <ArrowUp />
            </div>
          ) : (
            <div onClick={() => setSortParam("asc-departure")}>
              <ArrowDown />
            </div>
          )}
        </div>
      </div>
      <div className="border border-slate-800 p-2 basis-full flex gap-1 items-center justify-center">
        <p>Guests</p>
        {sortParam === "asc-guests" ? (
          <div onClick={() => setSortParam("desc-guests-number")}>
            <ArrowUp />
          </div>
        ) : (
          <div onClick={() => setSortParam("asc-guests-number")}>
            <ArrowDown />
          </div>
        )}
      </div>
      <div className="border border-slate-800 p-2 basis-full flex gap-1 items-center justify-center">
        <p>Cancel</p>
      </div>
    </div>
  );
};

export default Columns;
