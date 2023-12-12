import styled from "styled-components";
import { Motion } from "../../elements";

export const AcademicsContainer = styled(Motion)`
  bottom: 0;
  left: 50%;
  z-index: 1;
  height: 90%;
  width: 50rem;
  position: absolute;
  background-size: contain;
  transform: translate(-50%);
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/img/opened-paper.png");
`;

export const AcademicsWrapper = styled.div`
  left: 50%;
  top: 4.4rem;
  position: fixed;
  overflow-y: auto;
  padding: 0 4rem;
  transform: translate(-50%);
  height: calc(100% - 4.4rem);
  width: calc(21.875rem + 7rem);
`;

export const TextContainer = styled.div``;

export const Page = styled.div`
  flex: 1;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: #654300;
  font-size: 2rem;
  font-weight: 400;
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: #654300;
  text-align: justify;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem 0;
`;
