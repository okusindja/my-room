import { OrbitControls } from "@react-three/drei";
import { FC } from "react";

import React from "react";
import { Room } from "./room";
import { RoomProps } from "./room.types";

const convertToRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

export const Experience: FC<RoomProps> = ({
  light,
  setLight,
  clicables,
  onBooksClick,
  onGraduationCapClick,
  changeLanguageHandler,
  ...props
}) => {
  return (
    <>
      <OrbitControls
        maxZoom={10}
        minZoom={7}
        minDistance={7}
        zoomSpeed={0.3}
        maxDistance={16}
        enablePan={false}
        enableZoom={true}
        rotateSpeed={0.12}
        enableRotate={true}
        target={[0.9, 3.5, 3.3]}
        maxPolarAngle={convertToRadians(70)}
        minPolarAngle={convertToRadians(70)}
        maxAzimuthAngle={convertToRadians(60)}
        minAzimuthAngle={convertToRadians(20)}
      />
      <Room
        {...props}
        light={light}
        setLight={setLight}
        clicables={clicables}
        onBooksClick={onBooksClick}
        onGraduationCapClick={onGraduationCapClick}
        changeLanguageHandler={changeLanguageHandler}
      />
    </>
  );
};
