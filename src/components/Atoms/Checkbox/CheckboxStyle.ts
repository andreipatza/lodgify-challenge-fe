// LIBRARIES
import styled from "styled-components";

// MISC
import { COLORS } from "../../../constants/styleConstants";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Label = styled.label`
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  margin-bottom: 17px;
  font-size: 14px;

  // Create the box of the checkbox
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border: 1px solid gray;
    border-radius: 4px;
    background-color: white;
  }

  // Represents the checkmark
  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 5px;
    height: 9px;
    width: 5px;
    border-right: 2px solid ${COLORS.primary};
    border-bottom: 2px solid ${COLORS.primary};
    transform: rotate(45deg);
    display: none;
  }

  ${Checkbox}:checked + &::before {
    background-color: ${COLORS.green};
  }

  ${Checkbox}:checked + &::after {
    display: block;
  }
`;
