require("dotenv").config();
// import NavBar from "@/app/components/NavBar";
// import DropDown from "@/app/components/DropDown";
import Table from "@/app/components/Table";

async function getData() {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.RAPID_API_KEY_TWELVE_DATA,
            "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
        },
    };

    const res = await fetch(
        "https://twelve-data1.p.rapidapi.com/price?symbol=AMZN&format=json&outputsize=30",
        options
    );

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const data = await getData();
    // const data = { price: "MOCKED DATA" };
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
