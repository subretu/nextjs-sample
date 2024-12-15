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
    <div style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px", overflowX: "auto" }}>
      <table
        style={{ width: "100%", borderCollapse: "collapse", minWidth: "650px" }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "8px",
                border: "1px solid #ddd",
              }}
            >
              Dessert (100g serving)
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "8px",
                border: "1px solid #ddd",
              }}
            >
              Calories
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "8px",
                border: "1px solid #ddd",
              }}
            >
              Fat&nbsp;(g)
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "8px",
                border: "1px solid #ddd",
              }}
            >
              Carbs&nbsp;(g)
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "8px",
                border: "1px solid #ddd",
              }}
            >
              Protein&nbsp;(g)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {row.name}
              </td>
              <td
                style={{
                  textAlign: "right",
                  padding: "8px",
                  border: "1px solid #ddd",
                  cursor: "pointer",
                }}
                onClick={() => handleCellClick(row.calories, "Calories")}
              >
                {row.calories}
              </td>
              <td
                style={{
                  textAlign: "right",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}
              >
                {row.fat}
              </td>
              <td
                style={{
                  textAlign: "right",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}
              >
                {row.carbs}
              </td>
              <td
                style={{
                  textAlign: "right",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}
              >
                {row.protein}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
