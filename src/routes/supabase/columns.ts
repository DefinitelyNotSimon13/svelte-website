import type { ColumnDef } from "@tanstack/table-core";
import type { Country } from "$types/database";

export const columns: ColumnDef<Country>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "iso2",
    header: "ISO 2",
  },
  {
    accessorKey: "iso3",
    header: "ISO 3",
  },
  {
    accessorKey: "local_name",
    header: "Local Name",
  },
  {
    accessorKey: "continent",
    header: "Continent",
  },
];
