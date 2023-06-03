import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../CanvasLoader";

// Component: Earth
// This component represents the Earth model rendered in the scene.
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf"); // Load the Earth model using the useGLTF hook
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    // Render the Earth model as a primitive object with specified scale, position, and rotation
  );
};

// Component: EarthCanvas
// This component represents the canvas where the 3D scene is rendered.
const EarthCanvas = () => {
  return (
    <Canvas
      shadows // Enable shadow rendering
      frameloop="demand" // Control the frame rendering manually
      gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer for screenshot capture
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }} // Camera configuration
    >
      {/* Display fallback content until the scene is loaded */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate // Enable automatic rotation of the camera around the target
          enableZoom={false} // Disable zooming with the mouse scroll
          maxPolarAngle={Math.PI / 2} // Limit the maximum angle of the camera's polar rotation
          minPolarAngle={Math.PI / 2} // Limit the minimum angle of the camera's polar rotation
        />
        {/* Render the Earth component */}
        <Earth />
      </Suspense>
      {/* Preload all assets before showing the scene */}
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
