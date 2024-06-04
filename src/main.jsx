import * as THREE from "three";
import { scene, setupScene } from "./components/scene.js";
import { createPaintings } from "./components/paintings.js";
import { createWalls } from "./components/walls.js";
import { setupLighting } from "./components/lighting.js";
import { setupFloor } from "./components/floor.js";
import { createCeiling } from "./components/ceiling.js";
import { createBoundingBoxes } from "./components/boundingBox.js";
import { setupRendering } from "./components/rendering.js";
import { setupEventListeners } from "./components/eventListener.js";
import { addObjectsToScene } from "./components/sceneHelper.js";
import { setupPlayButton } from "./components/menu.js";
import { setupAudio } from "./components/audioGuide.js";
import { clickHandling } from "./components/clickHandling.js";
import { setupVR } from "./components/VRSupport.js";
import { loadStatueModel } from "./components/statue.js";
import { loadBenchModel } from "./components/bench.js";
import { loadCeilingLampModel } from "./components/ceilingLamp.js";

let { camera, controls, renderer } = setupScene();

setupAudio(camera);

const textureLoader = new THREE.TextureLoader();

const walls = createWalls(scene, textureLoader);
const floor = setupFloor(scene);
const ceiling = createCeiling(scene, textureLoader);
const paintings = createPaintings(scene, textureLoader);
const lighting = setupLighting(scene, paintings);

console.log(floor, ceiling, lighting);

createBoundingBoxes(walls);
createBoundingBoxes(paintings);

addObjectsToScene(scene, paintings);

setupPlayButton(controls);

setupEventListeners(controls);

clickHandling(renderer, camera, paintings);

setupRendering(scene, camera, renderer, paintings, controls, walls);

loadStatueModel(scene);

loadBenchModel(scene);

loadCeilingLampModel(scene);

setupVR(renderer);
