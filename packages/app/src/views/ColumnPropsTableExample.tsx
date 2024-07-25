import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {
  TableRowHeader,
  TableRowHeaderInternal,
} from "../components/TableRowHeader.js";
import {
  TableBody,
  TableBodyForRowModelInternal,
} from "../components/TableBody.js";
import { useMemo, useState } from "react";

const data = [0, 1, 2];

export function ColumnPropsTableExample() {
  const [isDoingSomething, setIsDoingSomething] = useState(false);
  const columns = useMemo(
    () => [
      {
        id: "test",
        header: () => "#",
        cell: ({ row }) => row.index,
      },
      {
        id: "select-col",
        header: () => <h1>Are we doing stuff?</h1>,
        cell: () => <strong>{isDoingSomething ? "yes" : "no"}</strong>,
      },
    ],
    [isDoingSomething]
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    debugAll: true,
  });

  return (
    <div className="p-2">
      <button
        className="border-2 border-blue-100"
        onClick={() => setIsDoingSomething(!isDoingSomething)}
      >
        Toggle doing something
      </button>

      <p>Table (no memoization)</p>
      <table>
        <TableRowHeaderInternal table={table} />
        <TableBodyForRowModelInternal rowModel={table.getRowModel()} />
      </table>

      <br />

      <p>Memoized Table</p>
      <table>
        <TableRowHeader table={table} />
        <TableBody table={table} />
      </table>

      <br />

      <p>Memoized Table with transparent props</p>
      <table>
        <TableRowHeader table={table} />
        <TableBody table={table} someUnusedProp={isDoingSomething} />
      </table>
    </div>
  );
}
