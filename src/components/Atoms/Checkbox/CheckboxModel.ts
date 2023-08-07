// MISC
import { Task } from "../../../views/TaskList/TaskListModel";

export interface CheckboxProps {
  task: Task;
  handleCheckboxChange: (taskId: string) => void;
}
