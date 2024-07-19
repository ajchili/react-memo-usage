import { flexRender, type RowModel, type Table } from "@tanstack/react-table";
import { memo } from "react";

export function TableBodyInternal<TData>({ table }: { table: Table<TData> }) {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export function TableBodyForRowModelInternal<TData>({
  rowModel,
}: {
  rowModel: RowModel<TData>;
}) {
  return (
    <tbody>
      {rowModel.rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export const TableBody = memo(TableBodyInternal);
export const TableBodyForRowModel = memo(TableBodyForRowModelInternal);
