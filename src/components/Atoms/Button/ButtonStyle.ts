// LIBRARIES
import styled from "styled-components";

// MISC
import { COLORS } from "../../../constants/styleConstants";

export const ButtonContainer = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: ${COLORS.green};
  color: ${COLORS.primary};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
