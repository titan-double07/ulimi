import DepartmentTable from "@/components/DepartmentTable";
import { useApi } from "@/lib/ApiContext";
import Image from "next/image";


export default async function Home() {
 
  return (
    <main className="space-y-4">
      <h1 className=" font-medium">Department List</h1>
      <DepartmentTable/>
    </main>
  );
}
