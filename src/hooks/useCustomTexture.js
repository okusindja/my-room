// import { useTexture } from "@react-three/drei";
// import * as THREE from "three";

// const TEXTURES = {
//   "10487_basketball_v1_3dmax2011_it2_Baked.001.jpg": "ball",
//   "12987_Saltwater_Aquarium_v1_l1.jpg": "aquarium",
//   "aquarium_glass.jpg": "aquariumGlass",
//   "aquariumBase.jpg": "aquariumBase",
//   "bible.jpg": "bible",
//   "books.jpg": "books",
//   "Cadeira_gamer.001.jpg": "Cadeira_gamer",
//   "computer.jpg": "computer",
//   "english.jpg": "english",
//   "flags.jpg": "flags",
//   "floor.jpg": "floor",
//   "french.jpg": "french",
//   "frigobar.jpg": "frigobar",
//   "fundo.jpg": "fundo",
//   "graduationCap.jpg": "graduationCap",
//   "keyboard.jpg": "keyboard",
//   "lamp.jpg": "lamp",
//   "laptop.jpg": "laptop",
//   "laptopScreen.jpg": "laptopScreen",
//   "lego.jpg": "lego",
//   "mouse.jpg": "mouse",
//   "mousepad.jpg": "mousepad",
//   "PCScreen.jpg": "PCScreen",
//   "plantPot.jpg": "plantPot",
//   "Room Walls.jpg": "RoomWalls",
//   "screen.jpg": "screen",
//   "shelfSmall.jpg": "shelfSmall",
//   "skateboard_.jpg": "skateboard",
//   "soda.jpg": "soda",
//   "table.jpg": "table",
//   "wallBigWrapper.jpg": "wallBigWrapper",
//   "walls.jpg": "walls",
//   "walls_diffuse.jpg": "walls_diffuse",
//   "window.jpg": "window",
//   "windowOutside.jpg": "windowOutside",
//   "wrapper.jpg": "wrapper",
// };

// const useCustomTexture = () => {
//   const textures = {};

//   Object.entries(TEXTURES).forEach(([fileName, key]) => {
//     const texture = useTexture(`bakes/${fileName}`);
//     texture.flipY = false;
//     texture.encoding = THREE.sRGBEncoding;
//     const textureMaterial = new THREE.MeshBasicMaterial({ map: texture });
//     textures[key] = textureMaterial;
//   });

//   return { textures };
// };

// export default useCustomTexture;
