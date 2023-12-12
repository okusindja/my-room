import styled from "styled-components";
import { Motion } from "../../elements";

export const AboutMeContainer = styled(Motion)`
  top: 50%;
  left: 50%;
  z-index: 1;
  height: 90%;
  width: 900px;
  position: absolute;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  background-image: url("/img/book.png");
`;

export const TextContainer = styled.div`
  gap: 6rem;
  left: 50%;
  top: 12rem;
  width: 70%;
  padding-top: 9rem;
  display: flex;
  position: absolute;
  justify-content: space-between;
  transform: translate(-50%, -50%);
`;

// export const AboutMeWrapper = styled.div`
//   left: 50%;
//   top: 4.4rem;
//   position: fixed;
//   overflow-y: auto;
//   padding: 0 4rem;
//   display: flex;
//   height: calc(100% - 4.4rem);
// `;

export const FirstPage = styled.div`
  flex: 1;
`;
export const SecondPage = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #654300;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #654300;
  text-align: justify;

  & > a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
`;
