import React from "react";
import { Picker, Icon } from "native-base";
const AirportPicker = ({ filter, setFilter, items, type }) => {
  return (
    <Picker
      mode="dropdown"
      iosIcon={<Icon name="arrow-down" />}
      placeholder={`Select your ${
        type === "departureAirport"
          ? "Departure Airport"
          : type === "arrivalAirport"
          ? "Arrival Airport"
          : "Travel Class"
      } `}
      placeholderStyle={{ color: "#bfc6ea" }}
      placeholderIconColor="#007aff"
      // style={{ width: 200 }}
      selectedValue={filter[type]}
      onValueChange={(id) => setFilter({ ...filter, [type]: id })}
    >
      {items}
    </Picker>
  );
};

export default AirportPicker;
