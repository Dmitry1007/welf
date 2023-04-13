// "use client";
// import NavBar from "@/app/components/NavBar";
// import DropDown from "@/app/components/DropDown";
import Table from "@/app/components/Table";

export default function Home() {
    const handleAddNewPortfolio = (item) => {
        switch (item) {
            case "Stocks":
                console.log("Stocks");
                break;
            case "Crypto":
                console.log("Crypto");
                break;
            case "Bonds":
                console.log("Bonds");
                break;
            case "Real Estate":
                console.log("Real Estate");
                break;
            default:
                console.log("Default");
                break;
        }
    };

    return (
        <>
            {/* <div className="flex justify-center">
                <DropDown
                    heading="Create Portfolio"
                    items={["Stocks", "Crypto", "Bonds", "Real Estate"]}
                    handleItemSelection={handleAddNewPortfolio}
                />
            </div> */}
            <Table />
        </>
    );
}
