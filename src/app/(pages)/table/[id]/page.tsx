import TableClient from "@/components/tableClient";
import { Metadata } from "next";

type PageProps = {
  params: {
    id: string;
  },
  searchParams: {
    draftKey?: string;
  }
}

export async function generateMetadata({params}: PageProps, parent: ResolvingMetadata):Promise<Metadata> {
  const productId = params.id
  return {
    title: 'Sample APP Table - ' +`${productId}`
  }
}

export default function DenseTableServer() {
  return (
    <div>
      <h1 className="px-5">Interactive Table</h1>
      <TableClient />
    </div>
  );
}
