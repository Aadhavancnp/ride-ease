import Cars from "./Cars";
import TaxiForm from "./TaxiForm";

export default function SearchSection() {
  return (
    <div className="rounded-xl border-[2px] p-2 md:p-5 md:pt-4">
      <p className="text-[20px] font-bold">Get a Ride</p>
      <form>
        <TaxiForm />
        <Cars />
      </form>
    </div>
  );
}
