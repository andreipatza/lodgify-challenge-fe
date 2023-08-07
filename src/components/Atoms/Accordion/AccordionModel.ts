// MISC
import { AccordionCategory } from "../../../views/TaskList/TaskListModel";

export interface AccordionProps {
  data: AccordionCategory;
  setIsOpen: (accordionId: string) => void;
  handleCheckboxChange: (taskId: string) => void;
}
