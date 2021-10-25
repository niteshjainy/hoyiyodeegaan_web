import React from "react";

const SelectLocation = ({ value, placeholder, className, onChange, name }) => {
  return (
    <select
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={onChange}
      name={name}
    >
      <option selected value="Adado">
        Adado
      </option>
      <option value="Baidao">Baidao</option>
      <option value="Beledwayn">Beledwayn</option>
      <option value="Boosaaso">Boosaaso</option>
      <option value="Berbera">Berbera</option>
      <option value="Borame">Borame</option>
      <option value="Burco">Burco</option>
      <option value="Buuhoodle">Buuhoodle</option>
      <option value="Ceerigaabo">Ceerigaabo</option>
      <option value="Dhuusamarreeb">Dhuusamarreeb</option>
      <option value="Galkacyo">Galkacyo</option>
      <option value="Garbahaarreey">Garbahaarreey</option>
      <option value="Hargeisah">Hargeisah</option>
      <option value="Hudur">Hudur</option>
      <option value="Jowhar">Jowhar</option>
      <option value="Kismayo">Kismayo</option>
      <option value="Laascaanood">Laascaanood </option>
      <option value="Mogdisho">Mogdisho</option>
      <option value="Qardho">Qardho</option>
    </select>
  );
};

export default SelectLocation;
