import Checkbox from "@/components/checkbox";
import { AVAILABILITY } from "../form/information";
import { generateSelect, generateStatus } from "./columns";
import { STATUSES } from "@/data/statuses";
import { Tags } from "@/types/dashboard";
import { ColumnDef, CellContext } from "@tanstack/react-table";

type Volunteer = {
  name: string;
  email: string;
  phone: string;
  discord: string;
  major: string;
  grade: string;
  availability: string[];
  gender: string;
  shirt: string;
};

type dropdownProps = {
  object: {
    availability: string[];
  };
};

export const TAGS: Tags[] = [
  {
    text: "confirm",
    value: 1,
  },
  {
    text: "not attending",
    value: -1,
  },
];

export const COLUMNS: (ColumnDef<Volunteer, string> & {
  searchable?: boolean;
})[] = [
  generateSelect(),
  {
    accessorKey: "name",
    header: "Name",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Volunteer, Volunteer["name"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Volunteer, Volunteer["email"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "discord",
    header: "Discord",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Volunteer, Volunteer["discord"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "shirt",
    header: "Shirt",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Volunteer, Volunteer["shirt"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "gender",
    header: "Gender",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Volunteer, Volunteer["gender"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  {
    accessorKey: "grade",
    header: "Grade",
    enableColumnFilter: true,
    filterFn: "includesString",
    searchable: true,
    cell: (props: CellContext<Volunteer, Volunteer["grade"]>) => (
      <div>{props.getValue()}</div>
    ),
  },
  generateStatus(STATUSES),
];

export const DROPDOWN: React.FC<dropdownProps> = ({ object }) => {
  return (
    <div className="flex justify-center">
      <div className="grid w-11/12 grid-flow-col grid-rows-4">
        {AVAILABILITY.map((text, index) => (
          <Checkbox
            id="availability"
            checked={object.availability.includes(text)}
            key={index}
          >
            {text}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};
