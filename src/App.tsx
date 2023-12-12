import React, { useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Experience } from "./components/room";
import "./index.css";
import { useSpring } from "@react-spring/core";
import Academics from "./components/academics";
import AboutMe from "./components/about-me";
import { AnimatePresence } from "framer-motion";
import { a } from "@react-spring/three";
import { Loader } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import { langTypes } from "./components/room/room.types";

function App() {
  const [light, setLight] = useState(false);
  const [clicables, setClicables] = useState(true);
  const [activeBooks, setActiveBooks] = useState(false);
  const [activeGraduationCap, setActiveGraduationCap] = useState(false);
  const { t, i18n } = useTranslation();

  const handleOpenAcademicInformation = () => {
    setActiveGraduationCap(!activeGraduationCap);
    setActiveBooks(false);
  };

  const handleOpenAboutMe = () => {
    setActiveBooks(!activeBooks);
    setActiveGraduationCap(false);
  };

  const changeLanguageHandler = (lang: langTypes) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Suspense fallback={null}>
        <Canvas frameloop="demand" camera={{ position: [5, 6.4, 10], fov: 30 }}>
          <color attach="background" args={["#161616"]} />
          <a.ambientLight intensity={light ? 1.3 : 0} />
          <Experience
            light={light}
            clicables={clicables}
            onBooksClick={handleOpenAboutMe}
            setLight={() => setLight(!light)}
            changeLanguageHandler={changeLanguageHandler}
            onGraduationCapClick={handleOpenAcademicInformation}
          />
        </Canvas>
        <p className="clickable" onClick={() => setClicables(!clicables)}>
          {t("viewClickable")}
        </p>
        <AnimatePresence>
          {activeGraduationCap && (
            <Academics
              isOpen={activeGraduationCap}
              setIsOpen={setActiveGraduationCap}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>{activeBooks && <AboutMe />}</AnimatePresence>
      </Suspense>
      <Loader />
    </>
  );
}

export default App;
