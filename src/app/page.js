// import NavBar from "@/app/components/NavBar";
// import DropDown from "@/app/components/DropDown";
import Table from "@/app/components/Table";

async function getData() {
    const res = await fetch("https://catfact.ninja/fact");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const data = await getData();
    console.log(data);

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
            <Table data={data} />
        </>
    );
}
