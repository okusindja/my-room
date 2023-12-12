import React from "react";
import {
  AboutMeContainer,
  FirstPage,
  SecondPage,
  Text,
  TextContainer,
  Title,
} from "./styles";
import { WrapperVariants } from "../../constants";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <AboutMeContainer
      animate="open"
      initial="closed"
      exit="exit"
      variants={WrapperVariants}
    >
      <TextContainer>
        <FirstPage>
          <Title>{t("aboutMe")}</Title>
          <Text>{t("aboutMeMessage")}</Text>
        </FirstPage>
        <SecondPage>
          <Title>{t("contactMe")}</Title>
          <Text>{t("contactMeMessage")}</Text>
          <Text>
            {t("phone")}: <a href="tel:0024495635826">+244-95635826</a>
          </Text>
          <Text>
            Email: <a href="mailto:okusindja@gmail.com">okusindja@gmail.com</a>
          </Text>
          <Text>
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/okusindja/" target="_blank">
              Okusindja R. de Almeida
            </a>
          </Text>
        </SecondPage>
      </TextContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
