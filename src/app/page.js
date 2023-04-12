// import NavBar from "@/app/components/NavBar";
// import Table from "@/app/components/Table";
import DropDown from "@/app/components/DropDown";

export default function Home() {
    return (
        <div className="flex justify-center">
            <DropDown
                heading="Add Portfolio"
                items={["Stocks", "Crypto", "Bonds", "Real Estate"]}
            />
        </div>
    );
}
