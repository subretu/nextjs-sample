"use client"; // クライアントコンポーネントとして指定

import * as React from "react";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  const handleCellClick = (value: string | number, column: string) => {
    console.log({ value, column });
    window.open("http://localhost:3001/", "_blank");
  };

  return (
    <div className="px-5 pt-5 overflow-x-auto">
      <table className="w-full border-collapse min-w-[650px]">
        <thead className="text-xs uppercase dark:bg-gray-700 dark:text-white">
          <tr>
            <th className="text-left p-2 border border-gray-300">
              Dessert (100g serving)
            </th>
            <th className="text-right p-2 border border-gray-300">Calories</th>
            <th className="text-right p-2 border border-gray-300">
              Fat&nbsp;(g)
            </th>
            <th className="text-right p-2 border border-gray-300">
              Carbs&nbsp;(g)
            </th>
            <th className="text-right p-2 border border-gray-300">
              Protein&nbsp;(g)
            </th>
          </tr>
        </thead>
        <tbody className="text-xs">
          {rows.map((row) => (
            <tr key={row.name} className="border-b border-gray-300">
              <td className="p-2 border border-gray-300">{row.name}</td>
              <td
                className="text-right p-2 border border-gray-300 cursor-pointer"
                onClick={() => handleCellClick(row.calories, "Calories")}
              >
                {row.calories}
              </td>
              <td className="text-right p-2 border border-gray-300">
                {row.fat}
              </td>
              <td className="text-right p-2 border border-gray-300">
                {row.carbs}
              </td>
              <td className="text-right p-2 border border-gray-300">
                {row.protein}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
