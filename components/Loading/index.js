import React from "react";
import { Spinner } from "native-base";
import { StyledView } from "../../styles";

const Loading = () => {
  return (
    <StyledView>
      <Spinner color="blue" />
    </StyledView>
  );
};

export default Loading;
