import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {
  TableRowHeader,
  TableRowHeaderInternal,
} from "../components/TableRowHeader.js";
import {
  TableBody,
  TableBodyForRowModel,
  TableBodyForRowModelInternal,
} from "../components/TableBody.js";

const data = [0, 1, 2];

export function TanStackTableExample() {
  const table = useReactTable({
    data,
    columns: [
      {
        id: "select-col",
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
      {
        id: "test",
        header: () => "#",
        cell: ({ row }) => row.index,
      },
    ],
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    debugAll: true,
  });

  return (
    <div className="p-2">
      <p>Table without memo</p>
      <table>
        <TableRowHeaderInternal table={table} />
        <TableBodyForRowModelInternal rowModel={table.getRowModel()} />
      </table>

      <br />

      <p>Table with memo</p>
      <table>
        <TableRowHeader table={table} />
        <TableBody table={table} />
      </table>
    </div>
  );
}
