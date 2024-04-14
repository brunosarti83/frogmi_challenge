/* eslint-disable react/prop-types */

import {
  Navbar,
  NavbarBrand,
  Avatar,
  NavbarContent,
  Select,
  SelectItem,
} from "@nextui-org/react";

function NavBar({ selected, setSelected }) {
  const magTypes = ["md", "ml", "ms", "mw", "me", "mi", "mb", "mlg"];

  return (
    <Navbar isBordered>
      <NavbarBrand justify="start">
        <Avatar src="/frogmi.png" />
        <p className="ml-2 text-xl text-gray-50 font-bold">
          earthquake/usgs.gov
        </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Select
          label="MagType:"
          selectionMode="multiple"
          placeholder="Filter by magType..."
          variant="bordered"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          className="max-w-xs my-auto"
        >
          {magTypes.map((magType) => (
            <SelectItem key={magType} value={magType}>
              {magType}
            </SelectItem>
          ))}
        </Select>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
