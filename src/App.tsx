import React from 'react';

// LIBRARIES
import styled from "styled-components";

// MISC
import { COLORS } from './constants/styleConstants';

// COMPONENTS
import TaskList from './views/TaskList/TaskList';

function App() {
  return (
    <AppContainer>
      <TaskList />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.secondary};
`;

export default App;
