import { flexRender, type Table } from "@tanstack/react-table";
import { memo } from "react";

export function TableRowHeaderInternal<TData>({
  table,
}: {
  table: Table<TData>;
}) {
  return (
    <thead>
      {table.getHeaderGroups().map((header) => (
        <tr key={header.id}>
          {header.headers.map((header) => (
            <th key={header.id}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}

export const TableRowHeader = memo(TableRowHeaderInternal);
