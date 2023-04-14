"use client";
import { useState } from "react";
import PriceInput from "./PriceInput";
import BasicInput from "./BasicInput";

const rows = [
    {
        symbol: "TSLA",
        quantity: "100",
        pricePerShare: "180.53",
        totalCost: "COMPUTE",
        currentPrice: "FETCH",
        marketValue: "COMPUTE",
    },
    // More transactions...
];

export default function Table({ data }) {
    console.log("data bitches", data);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleAddRow = () => {
        setIsUpdating(true);
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                        Stock Portfolio
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A Stock Portfolio is a collection of stocks that you
                        own.
                    </p>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
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
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                                            {row.symbol}
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                            {row.quantity}
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                            {row.pricePerShare}
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

                                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a
                                                href="#"
                                                className="text-indigo-600 hover:text-indigo-900"
                                            >
                                                Delete
                                                <span className="sr-only">
                                                    , {index}
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}

                                {isUpdating ? (
                                    <tr>
                                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                                            <BasicInput
                                                placeholder={"Symbol"}
                                                type={"search"}
                                            />
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                            <BasicInput
                                                placeholder={"Quantity"}
                                                type={"number"}
                                            />
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">
                                            <PriceInput />
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            COMPUTE
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            FETCH
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            COMPUTE
                                        </td>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                            <button
                                                type="button"
                                                className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Submit
                                            </button>
                                        </td>
                                    </tr>
                                ) : (
                                    <tr>
                                        <td>
                                            <button
                                                onClick={() => handleAddRow()}
                                                type="button"
                                                className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Add Stock
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
