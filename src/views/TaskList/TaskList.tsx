import React, { useEffect, useState } from "react";

// STYLES
import {
  ErrorMessage,
  Header,
  LoadingContainer,
  LoadingText,
  ModalTitle,
  TaskListContainer,
  TaskTitle,
} from "./TaskListStyle";

// LIBRARIES
import { v4 as uuidv4 } from "uuid";
import CircularProgress from "@mui/material/CircularProgress";
import Confetti from "react-confetti";

// MISC
import { AccordionCategory, PercentageData, Task } from "./TaskListModel";
import useWindowSize from "../../hooks/useWindowSize";

// ASSETS

// REDUX

// COMPONENTS
import Accordion from "../../components/Atoms/Accordion/Accordion";
import ProgressBar from "../../components/Atoms/ProgressBar/ProgressBar";
import Button from "../../components/Atoms/Button/Button";
import ModalAtom from "../../components/Atoms/Modal/Modal";

const TaskList = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  const [accordionData, setAccordionData] = useState<AccordionCategory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [percentageData, setPercentageData] = useState<PercentageData>({
    percents: 0,
    totalNormalized: 0,
  });
  const { width, height } = useWindowSize();

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    getData();
  }, []);

  // REQUEST API FUNCTIONS
  const getData = async () => {
    setIsLoading(true);

    await fetch(
      "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress"
    )
      .then((response) => response.json())
      .then((json) => {
        const totalValue: number = json.reduce(
          (total: number, accordion: AccordionCategory) => {
            return (
              total +
              accordion.tasks.reduce((taskTotal, task) => {
                return taskTotal + task.value;
              }, 0)
            );
          },
          0
        );

        const data = json.map((item: AccordionCategory) => ({
          id: uuidv4(),
          name: item.name,
          tasks: item.tasks.map((task: Task) => ({
            ...task,
            id: uuidv4(),
            checked: false,
            normalizedValue: Number((task.value * 100) / totalValue),
          })),
          isOpen: false,
        }));

        setPercentageData({
          percents: 0,
          totalNormalized: totalValue,
        });

        setAccordionData(data);

        // Only purpose for applying a timeout is to show the loading component
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  // HANDLERS FUNCTIONS
  const handleOpenAccordion = (accordionId: string) => {
    const updatedAccordionData = accordionData.map(
      (accordion: AccordionCategory) => {
        if (accordion.id === accordionId) {
          return {
            ...accordion,
            isOpen: !accordion.isOpen,
          };
        } else {
          return {
            ...accordion,
            isOpen: false,
          };
        }
      }
    );

    setAccordionData(updatedAccordionData);
  };

  const handleCheckboxChange = (taskId: string) => {
    const updatedAccordionData = accordionData.map(
      (accordion: AccordionCategory) => {
        const updatedTasks = accordion.tasks.map((task) => {
          if (task.id === taskId) {
            if (task.checked) {
              setPercentageData({
                ...percentageData,
                percents: percentageData.percents - task.normalizedValue,
              });
            } else {
              setPercentageData({
                ...percentageData,
                percents: percentageData.percents + task.normalizedValue,
              });
            }
            return {
              ...task,
              checked: !task.checked,
            };
          } else {
            return task;
          }
        });

        return {
          ...accordion,
          tasks: updatedTasks,
        };
      }
    );

    setAccordionData(updatedAccordionData);
  };

  return (
    <TaskListContainer>
      {isLoading ? (
        <LoadingContainer>
          <LoadingText>We are preparing the content for you...</LoadingText>
          <CircularProgress />
        </LoadingContainer>
      ) : isError ? (
        <ErrorMessage>
          Something went wrong, please refresh page...
        </ErrorMessage>
      ) : (
        <>
          <Header>
            <TaskTitle>Lodgify Grouped Tasks</TaskTitle>
            <ProgressBar percentage={Math.round(percentageData.percents)} />
          </Header>

          {accordionData.map((accordion: AccordionCategory) => (
            <Accordion
              key={accordion.id}
              data={accordion}
              setIsOpen={handleOpenAccordion}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}

          {percentageData.percents === 100 && (
            <Confetti width={width} height={height} />
          )}

          <ModalAtom
            open={percentageData.percents === 100}
            onClose={() => window.location.reload()}
          >
            <ModalTitle>You've successfully completed all tasks!</ModalTitle>
            <Button onClick={() => window.location.reload()} text="Restart" />
          </ModalAtom>
        </>
      )}
    </TaskListContainer>
  );
};

export default TaskList;
