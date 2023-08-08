// LIBRARIES
import styled from "styled-components";

// MISC
import { COLORS } from "../../../constants/styleConstants";

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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

export const ModalTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;
