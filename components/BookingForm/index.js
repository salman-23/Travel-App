import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//Components
import { bookingCreate } from "../../store/actions/bookingActions";
import PassengerForm from "./PassengerForm";
//Styling
import {
  AuthContainer,
  AuthButton,
  AuthButtonText,
} from "../authentication/styles";
import { Content } from "native-base";

const BookingForm = ({ navigation }) => {
  const { user } = useSelector((state) => state.authReducer);
  const bookingReducer = useSelector((state) => state.bookingReducer);
  const { passengersCount } = bookingReducer;
  const dispatch = useDispatch();

  let initialState = [];
  for (let i = 0; i < passengersCount; i++) {
    initialState.push({
      firstName: "",
      lastName: "",
      email: "",
      passport: "",
      birthDate: "",
    });
  }
  const [passengers, setPassengers] = useState(initialState);

  const handleChange = (text, name, number) => {
    let passengersArr = passengers.slice();
    passengersArr[number][name] = text;
    setPassengers(passengersArr);
  };

  const handleSubmit = (event) => {
    dispatch(bookingCreate(passengers, bookingReducer, user, navigation));
  };
  let passengersForms = [];
  for (const number in passengers) {
    passengersForms.push(
      <PassengerForm
        passengers={passengers}
        handleChange={handleChange}
        number={number}
        key={number}
      />
    );
  }
  return (
    <Content>
      <AuthContainer>
        {passengersForms}
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText>Submit</AuthButtonText>
        </AuthButton>
      </AuthContainer>
    </Content>
  );
};

export default BookingForm;
