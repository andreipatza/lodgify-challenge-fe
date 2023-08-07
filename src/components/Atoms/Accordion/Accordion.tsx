import React from "react";

// STYLES
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionOpenedState,
  AccordionTitle,
  StyledCompletedTasks,
  StyledUncompletedTasks,
} from "./AccordionStyle";

// LIBRARIES
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// MISC
import { AccordionProps } from "./AccordionModel";
import { COLORS } from "../../../constants/styleConstants";
import CheckboxAtom from "../Checkbox/Checkbox";

// ASSETS

// REDUX

// COMPONENTS

const Accordion = (props: AccordionProps) => {
  // PROPS
  const { data, setIsOpen, handleCheckboxChange } = props;
  const { id, name, tasks, isOpen } = data;

  // GENERAL CONSTANTS
  const isAllChecked = tasks.every((task) => task.checked);

  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setIsOpen(id)}>
        <AccordionTitle $isAllChecked={isAllChecked}>
          {isAllChecked ? (
            <StyledCompletedTasks style={{ color: COLORS.green }} />
          ) : (
            <StyledUncompletedTasks />
          )}
          {name}
        </AccordionTitle>
        <AccordionOpenedState>
          {isOpen ? (
            <>
              Hide <ExpandLessIcon />
            </>
          ) : (
            <>
              Show
              <ExpandMoreIcon />
            </>
          )}
        </AccordionOpenedState>
      </AccordionHeader>
      <AccordionContent $isOpen={isOpen}>
        {tasks.map((task, index) => (
          <CheckboxAtom
            task={task}
            handleCheckboxChange={() => handleCheckboxChange(task.id)}
          />
        ))}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
