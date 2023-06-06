import { Suspense, useRef, useState } from "react";

import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.cjs";

// Stars component
const Stars = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>();

  // Generate a Float32Array of sphere positions using random.inSphere
  const [sphere] = useState(() =>
    Float32Array.from(
      random.inSphere(new Float32Array(3000), {
        radius: 1.2,
      }),
    ),
  );

  // useFrame is a custom hook provided by @react-three/fiber to perform actions on each frame
  useFrame((_state, delta) => {
    // Update the rotation of the Stars group
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* The 'group' component allows grouping multiple objects together and applying transformations */}
      {/* Here, it is used to rotate the stars as a group */}

      {/* The 'Points' component renders the stars */}
      {/* It uses the 'positions' property to define the positions of the stars */}
      {/* The 'stride' property specifies the number of components per vertex in the 'positions' array */}
      {/* In this case, each vertex has three components (x, y, z) */}
      {/* This property is used for efficient memory allocation and rendering optimizations */}
      {/* It helps improve performance by skipping unnecessary data */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        {/* The 'PointMaterial' component defines the appearance of each star */}
        {/* It determines the color, size, and other visual properties of the stars */}
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// StarsCanvas component
const StarsCanvas = () => {
  return (
    <div className="w-full h-auto inset-0 z-[-1] fixed">
      {/* Canvas component provides the Three.js rendering context */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        {/* Suspense component handles loading states */}
        <Suspense fallback={null}>
          {/* Render the Stars component */}
          <Stars />
        </Suspense>

        {/* Preload component ensures assets are loaded before rendering */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
