import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { signout } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { Icon, Button } from "native-base";

const Logout = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(signout());
    navigation.navigate("Home");
  };
  return (
    <Icon
      onPress={handlelogout}
      type="AntDesign"
      name="logout"
      style={{ fontSize: 20, color: "black" }}
    />
  );
};

export default Logout;
