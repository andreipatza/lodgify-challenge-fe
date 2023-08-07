// LIBRARIES
import styled from "styled-components";

// MISC
import { COLORS } from "../../constants/styleConstants";

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  min-width: 300px;
  padding: 40px 15px 15px 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  align-items: center;
  background-color: ${COLORS.primary};
`;

export const TaskTitle = styled.div`
  font-weight: bold;
  width: 100%;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.div`
  color: ${COLORS.red};
  font-size: 14px;
  margin-bottom: 20px;
  font-size: 23px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const LoadingText = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  font-size: bold;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 100px;
  padding: 20px;
  background-color: ${COLORS.primary};
  border-radius: 10px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ModalTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: ${COLORS.green}; // Change as required
  color: ${COLORS.primary};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
