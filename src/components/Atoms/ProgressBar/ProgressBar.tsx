import React from "react";

// STYLE
import {
  FilledBar,
  Percentage,
  ProgressBarContainer,
} from "./ProgressBarStyle";

// MISC
import { ProgressBarProps } from "./ProgressBarModel";


const ProgressBar = (props: ProgressBarProps) => {
  // PROPS
  const { percentage } = props;

  return (
    <ProgressBarContainer>
      <FilledBar $percentage={Math.min(Math.max(percentage, 0), 100)}>
        <Percentage>{percentage}%</Percentage>
      </FilledBar>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
