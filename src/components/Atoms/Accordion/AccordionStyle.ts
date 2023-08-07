// LIBRARIES
import styled from "styled-components";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

// MISC
import { COLORS } from "../../../constants/styleConstants";

export const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  width: 100%;
  cursor: pointer;
`;

export const AccordionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  height: 45px;
  background-color: ${COLORS.primary};
  transition: background-color 0.2s;
`;

export const AccordionTitle = styled.div<{ $isAllChecked: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => (props.$isAllChecked ? COLORS.green : COLORS.black)};
`;

export const AccordionOpenedState = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: gray;
  font-size: 14px;
`;

export const AccordionContent = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  padding: 10px 15px;
  margin-left: 15px;
`;

export const StyledUncompletedTasks = styled(AssignmentOutlinedIcon)`
  color: ${COLORS.black};
  margin-right: 10px;
`;

export const StyledCompletedTasks = styled(AssignmentTurnedInOutlinedIcon)`
  color: ${COLORS.black};
  margin-right: 10px;
`;
