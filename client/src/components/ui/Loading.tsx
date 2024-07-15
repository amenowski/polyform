import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex h-96 w-full items-center justify-center text-3xl">
      <HashLoader color="#0000" />
    </div>
  );
}
