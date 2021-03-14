import React from "react";
import DatePicker from "react-native-datepicker";
const DateSelector = ({ filter, setFilter, type }) => {
  return (
    <DatePicker
      style={{
        width: 200,
        marginBottom: 20,
      }}
      date={filter[type]}
      mode="date"
      placeholder={`Select ${
        type === "departureDate" ? "Departure Date" : "Return Date"
      }`}
      format="DD/MM/YYYY"
      minDate={
        type === "departureDate" || !filter.departureDate
          ? new Date()
          : filter.departureDate
      }
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          //display: 'none',
          position: "absolute",
          left: 0,
          top: 4,
          marginLeft: 0,
        },
        dateInput: {
          marginLeft: 36,
        },
      }}
      onDateChange={(date) => setFilter({ ...filter, [type]: date })}
    />
  );
};

export default DateSelector;
