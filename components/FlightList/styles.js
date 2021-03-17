import styled from "styled-components/native";
import { Thumbnail, ListItem, Text, Button, Container } from "native-base";

export const ThumbnailStyled = styled(Thumbnail)`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const ListItemStyled = styled(ListItem)`
  margin-bottom: 2%;
  background: ${(props) => (props.selected ? "#90ee90" : "white")};
`;

export const StyledMessage = styled(Text)`
  font-size: 20px;
  text-align: center;
  margin: auto;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #f1f6ff;
  align-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const StyledContainer = styled(Container)`
  flex: 1;
  flex-wrap: wrap;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #f1f6ff;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 40px;
`;

export const StyledButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 10px;
  margin-right: 20px;
  background-color: ${(props) => (props.active ? "#4552c4" : "#808080")};
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  margin-right: 22px;
  margin-left: 30px;
`;
