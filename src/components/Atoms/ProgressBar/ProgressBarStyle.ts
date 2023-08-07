// LIBRARIES
import styled from "styled-components";

// MISC
import { COLORS } from "../../../constants/styleConstants";

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.lightGreen};
  border-radius: 15px;
  margin: 10px 0;
  overflow: hidden;
`;

export const FilledBar = styled.div<{ $percentage: number }>`
  height: 23px; // Adjust as needed
  width: ${(props) => props.$percentage}%;
  background-color: ${COLORS.green};
  transition: width 0.3s ease;
  position: relative;
`;

export const Percentage = styled.div`
  color: ${COLORS.primary};
  position: absolute;
  top: 3px;
  right: 5px;
  font-size: 15px;
`;
