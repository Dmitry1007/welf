"use client";
import { useState } from "react";

const rows = [
  {
    id: 1,
    symbol: "TSLA",
    quantity: "100",
    pricePerShare: "180.53",
    totalCost: "COMPUTE",
    currentPrice: "FETCH",
    marketValue: "COMPUTE",
  },
  {
    id: 2,
    symbol: "AAPL",
    quantity: "200",
    pricePerShare: "340.50",
    totalCost: "COMPUTE",
    currentPrice: "FETCH",
    marketValue: "COMPUTE",
  },
  // More transactions...
];

export default function Table({ data }) {
  console.log("data", data);
  const [stocks, setStocks] = useState(rows);
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("0");
  const [pricePerShare, setPricePerShare] = useState("0");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      console.log("handleSubmit Editing id", editId);
      handleEdit();
      return;
    }
    setStocks([
      ...stocks,
      {
        id: stocks.length + 1,
        symbol,
        quantity,
        pricePerShare,
        totalCost: "COMPUTE",
        currentPrice: "FETCH",
        marketValue: "COMPUTE",
      },
    ]);
    setSymbol("");
    setQuantity("0");
    setPricePerShare("0");
  };

  const handleDelete = (index) => {
    setStocks(stocks.filter((_, i) => i !== index));
  };

  const handleEdit = () => {
    console.log("Handle Edit Editing id", editId);
    const newStocks = stocks.map((stock) => {
      if (stock.id === editId) {
        return {
          ...stock,
          symbol,
          quantity,
          pricePerShare,
        };
      }
      return stock;
    });
    setStocks(newStocks);
    setSymbol("");
    setQuantity("0");
    setPricePerShare("0");
    setIsEditing(false);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Stock Portfolio
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A Stock Portfolio is a collection of stocks that you own.
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <form onSubmit={(event) => handleSubmit(event)}>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Ticker
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price Per Share
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Total Cost
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Current Price
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Market Value
                    </th>

                    <th
                      scope="col"
                      className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit/Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {stocks.map((row, _) => (
                    <tr key={row.id}>
                      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                        {row.symbol}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                        {row.quantity}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                        ${row.pricePerShare}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {row.totalCost}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {row.currentPrice}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                        {row.marketValue}
                      </td>

                      <td className="flex space-x-1 px-2 py-2 text-sm  font-medium sm:pr-0">
                        <button
                          onClick={() => {
                            setIsEditing(true);
                            setEditId(row.id);
                            setSymbol(row.symbol);
                            setQuantity(row.quantity);
                            setPricePerShare(row.pricePerShare);
                          }}
                          type="button"
                          className="rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(row.id)}
                          type="button"
                          className="rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                      <input
                        onChange={(e) =>
                          setSymbol(e.target.value.toUpperCase())
                        }
                        value={symbol}
                        type="search"
                        required
                        disabled={isEditing}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Symbol"
                      />
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                      <input
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        type="number"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Quantity"
                      />
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                      <input
                        onChange={(e) => setPricePerShare(e.target.value)}
                        value={pricePerShare}
                        type="decimal"
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Price"
                      />
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                      ...
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                      ...
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                      ...
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                      <button
                        type="submit"
                        className="rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      >
                        {isEditing ? "Update Stock" : "Add Stock"}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
