import React from "react";

// STYLES
import { Checkbox, CheckboxContainer, Label } from "./CheckboxStyle";

// LIBRARIES

// MISC
import { CheckboxProps } from "./CheckboxModel";

// COMPONENTS

const CheckboxAtom = (props: CheckboxProps) => {
  // PROPS
  const { task, handleCheckboxChange } = props;

  return (
    <CheckboxContainer>
      <Checkbox
        checked={task.checked}
        id={task.id}
        name={task.id}
        onChange={() => handleCheckboxChange(task.id)}
      />
      <Label htmlFor={task.id}>{task.description}</Label>
    </CheckboxContainer>
  );
};

export default CheckboxAtom;
