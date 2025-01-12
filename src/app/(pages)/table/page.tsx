import TableClient from "@/components/tableClient";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
  };
}

export default function DenseTableServer() {
  return (
    <div>
      <h1 className="px-5">Interactive Table</h1>
      <TableClient />
    </div>
  );
}
