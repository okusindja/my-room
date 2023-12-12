import React, { FC } from "react";
import {
  AcademicsContainer,
  AcademicsWrapper,
  CloseButton,
  Footer,
  Page,
  Text,
  TextContainer,
  Title,
  TitleWrapper,
} from "./styles";
import { WrapperSettings } from "../../constants";
import { AcademicsProps } from "./academic.types";
import { TimesSVG } from "../svg";

const Academics: FC<AcademicsProps> = ({ isOpen, setIsOpen }) => {
  return (
    <AcademicsContainer
      variants={WrapperSettings}
      animate={"open"}
      initial="closed"
      exit="exit"
    >
      <AcademicsWrapper>
        <TextContainer>
          <Page>
            <TitleWrapper>
              <Title>Academics</Title>
              <CloseButton onClick={() => setIsOpen(!isOpen)}>
                <TimesSVG
                  color="#654300"
                  maxHeight="24px"
                  maxWidth="24px"
                  width="100%"
                />
              </CloseButton>
            </TitleWrapper>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, placeat animi aspernatur consequuntur fuga vero natus,
              quibusdam tempora, obcaecati cumque vel labore ut. Error natus
              assumenda impedit, aspernatur aperiam excepturi. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Cupiditate, placeat animi
              aspernatur consequuntur fuga vero natus, quibusdam tempora,
              obcaecati cumque vel labore ut. Error natus assumenda impedit,
              aspernatur aperiam excepturi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate, placeat animi aspernatur
              consequuntur fuga vero natus, quibusdam tempora, obcaecati cumque
              vel labore ut. Error natus assumenda impedit, aspernatur aperiam
              excepturi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cupiditate, placeat animi aspernatur consequuntur fuga vero
              natus, quibusdam tempora, obcaecati cumque vel labore ut. Error
              natus assumenda impedit, aspernatur aperiam excepturi. assumenda
              impedit, aspernatur aperiam excepturi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate, placeat animi aspernatur
              consequuntur fuga vero natus, quibusdam tempora, obcaecati cumque
              vel labore ut. Error natus assumenda impedit, aspernatur aperiam
              excepturi. assumenda impedit, aspernatur aperiam excepturi. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
              placeat animi aspernatur consequuntur fuga vero natus, quibusdam
              tempora, obcaecati cumque vel labore ut. Error natus assumenda
              impedit, aspernatur aperiam excepturi. assumenda impedit,
              aspernatur aperiam excepturi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate, placeat animi aspernatur
              consequuntur fuga vero natus, quibusdam tempora, obcaecati cumque
              vel labore ut. Error natus assumenda impedit, aspernatur aperiam
              excepturi. assumenda impedit, aspernatur aperiam excepturi. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
              placeat animi aspernatur consequuntur fuga vero natus, quibusdam
              tempora, obcaecati cumque vel labore ut. Error natus assumenda
              impedit, aspernatur aperiam excepturi.
            </Text>
            <Footer>
              <CloseButton onClick={() => setIsOpen(!isOpen)}>
                <TimesSVG
                  color="#654300"
                  maxHeight="24px"
                  maxWidth="24px"
                  width="100%"
                />
              </CloseButton>
            </Footer>
          </Page>
        </TextContainer>
      </AcademicsWrapper>
    </AcademicsContainer>
  );
};

export default Academics;
