import React from "react";
import { Picker, Icon } from "native-base";
const AirportPicker = ({ filter, setFilter, items, type }) => {
  return (
    <Picker
      mode="dropdown"
      iosIcon={<Icon name="arrow-down" />}
      placeholder="Select your departure airport"
      placeholderStyle={{ color: "#bfc6ea" }}
      placeholderIconColor="#007aff"
      // style={{ width: 200 }}
      selectedValue={filter[type]}
      onValueChange={(airport) => setFilter({ ...filter, [type]: airport })}
    >
      {items}
    </Picker>
  );
};

export default AirportPicker;
