import { Dispatch, SetStateAction } from "react";

export default function FirstLoad({
  handleTrum,
}: {
  handleTrum: Dispatch<SetStateAction<boolean | null>>;
}) {
  return (
    <div className="w-full min-h-screen flex  flex-col justify-center items-center  h-full bg-black">
      <h2 className="text-4xl font-bold">Choose your pill</h2>
      <div className="flex gap-3 mt-5 font-bold">
        <button
          onClick={() => handleTrum(false)}
          className="bg-blue-600 uppercase hover:scale-105 px-9 py-5 rounded-full"
        >
          Jeet
        </button>
        <button
          onClick={() => handleTrum(true)}
          className="bg-red-600 uppercase hover:scale-105 px-9 py-5 rounded-full"
        >
          Trump
        </button>
      </div>
    </div>
  );
}
