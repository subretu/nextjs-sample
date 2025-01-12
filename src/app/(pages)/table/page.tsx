import TableClient from "@/components/tableClient";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Sample APP Table',
  description: 'Generated by create next app',
}

export default function DenseTableServer() {
  const id = "hoge";
  return (
    <div>
      <h1 className="px-5">Interactive Table</h1>
      <TableClient />
      <Link
        href={`http://localhost:3001/table/${id}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        to id page
      </Link>
    </div>
  );
}
