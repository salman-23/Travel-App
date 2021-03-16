import React from "react";
//Styling
import { Text } from "native-base";
import { AuthTitle, AuthTextInput } from "../authentication/styles";
import DatePicker from "react-native-datepicker";

const PassengerForm = ({ number, handleChange, passengers }) => {
  return (
    <>
      <AuthTitle>
        {number == 0 ? "Lead Passenger" : `Passenger #${+number + 1}`}
      </AuthTitle>
      <Text>First Name</Text>
      <AuthTextInput
        value={passengers[number].firstName}
        onChangeText={(text) => handleChange(text, "firstName", number)}
        placeholder="First Name"
        placeholderTextColor="#A6AEC1"
      />
      <Text>Last Name</Text>
      <AuthTextInput
        value={passengers[number].lastName}
        onChangeText={(text) => handleChange(text, "lastName", number)}
        placeholder="Last Name"
        placeholderTextColor="#A6AEC1"
      />
      <Text>Email</Text>
      <AuthTextInput
        value={passengers[number].email}
        onChangeText={(text) => handleChange(text, "email", number)}
        placeholder="Email"
        placeholderTextColor="#A6AEC1"
      />
      <Text>Passport</Text>
      <AuthTextInput
        value={passengers[number].passport}
        onChangeText={(text) => handleChange(text, "passport", number)}
        placeholder="Passport"
        placeholderTextColor="#A6AEC1"
      />
      <Text>Date of Birth</Text>
      <DatePicker
        style={{
          width: 200,
          marginBottom: 20,
        }}
        date={passengers[number].birthDate}
        mode="date"
        placeholder={`Insert your Date of Birth`}
        format="DD/MM/YYYY"
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
        onDateChange={(date) => handleChange(date, "birthDate", number)}
      />
    </>
  );
};

export default PassengerForm;
