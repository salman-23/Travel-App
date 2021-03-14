import styled from "styled-components";
import { Thumbnail, ListItem, Text } from "native-base";

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
