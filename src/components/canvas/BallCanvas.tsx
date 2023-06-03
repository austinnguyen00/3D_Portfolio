import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../CanvasLoader";

// Interface to define the props for the Ball component
interface BallProps {
  imgUrl: string; // The URL of the image to be used as a texture
}

// Ball component represents a 3D ball with a textured decal
const Ball: React.FC<BallProps> = (props) => {
  const [decal] = useTexture([props.imgUrl]); // Load the texture using useTexture hook

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* The Float component creates a floating effect for the Ball */}
      {/* It animates the ball's position, rotation, and scale */}
      {/* speed: The speed of the floating animation */}
      {/* rotationIntensity: The intensity of the rotation animation */}
      {/* floatIntensity: The intensity of the floating effect */}

      {/* Ambient light to provide global illumination */}
      <ambientLight intensity={0.25} />
      {/* Directional light to simulate sunlight */}
      <directionalLight position={[0, 0, 0.05]} />
      {/* Mesh representing the ball */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* icosahedronGeometry is a geometry representing an icosahedron */}
        {/* It is a 20-sided polyhedron that approximates a sphere */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset // Enable polygon offset for preventing z-fighting
          polygonOffsetFactor={-5} // Set polygon offset factor
          flatShading // Apply flat shading to the material
        />
        {/* Decal applied to the surface of the ball */}
        <Decal
          position={[0, 0, 1]} // Position of the decal
          rotation={[2 * Math.PI, 0, 6.25]} // Rotation of the decal
          scale={1} // Scale of the decal
          map={decal} // Texture used for the decal
          flatShading // Apply flat shading to the decal
        />
      </mesh>
    </Float>
  );
};

// BallCanvas component represents the canvas that renders the Ball component
const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand" // Specify the frameloop strategy
      dpr={[1, 2]} // Specify the device pixel ratio
      gl={{ preserveDrawingBuffer: true }} // Specify GL properties
    >
      {/* Suspense component for fallback content - display fallback until its children have finished loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls component for camera movement */}
        {/* It enables the user to orbit the camera around the scene */}
        {/* enableZoom: Determines whether zooming with the mouse is enabled or not */}
        <OrbitControls enableZoom={false} />
        {/* Disable zooming with the mouse */}
        <Ball imgUrl={icon}></Ball>
        {/* Render the Ball component with the specified icon */}
      </Suspense>

      {/* Preload all assets before showing */}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
