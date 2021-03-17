import styled from "styled-components/native";
import { Container, Text } from "native-base";

export const StyledContainer = styled(Container)`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #f1f6ff;
  padding-right: 60px;
  padding-left: 60px;
  margin-top: 40px;
`;

export const ButtonTextStyled = styled(Text)`
  margin: auto;
`;

export const SearchButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #4552c4;
  margin-top: 30px;
`;
