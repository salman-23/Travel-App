import React from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
//Styling
import {
  HomeBackground,
  TopStyling,
  BottomStyling,
  ButtonStyled,
} from "./styles";
//Components
import { profile } from "../../store/actions/authActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const handlePress = () => {
    if (user) {
      dispatch(profile());
      navigation.navigate("UserProfile");
    } else {
      Alert.alert(
        "Signin",
        "You need to sign in before viewing your profile",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Sign in",
            onPress: () => navigation.navigate("Signin", { booking: false }),
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <HomeBackground
      source={{
        uri:
          "https://images.unsplash.com/photo-1559268950-2d7ceb2efa3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80",
      }}
    >
      <TopStyling></TopStyling>
      <BottomStyling>
        <ButtonStyled onPress={handlePress}>Profile</ButtonStyled>
        <ButtonStyled onPress={() => navigation.navigate("FlightSearch")}>
          Take a look at our flights
        </ButtonStyled>
      </BottomStyling>
    </HomeBackground>
  );
};

export default Home;
