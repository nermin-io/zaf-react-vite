import styled from "styled-components";

export const ResizeHandle = styled.div`
  background-color: #e7e7e7;
  height: 5px;
  width: 80px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: 0;
  border-radius: 5px;
  cursor: ns-resize;
  transition: background-color 0.15s ease-in;

  &:hover {
    background-color: #e1e1e1;
  }
`;
