import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PhoneNumberField = ({
  value,
  placeholder,
  className,
  onChange,
  name,
}) => {
  return (
    <PhoneInput
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={onChange}
      name={name}
    />
  );
};

export default PhoneNumberField;
