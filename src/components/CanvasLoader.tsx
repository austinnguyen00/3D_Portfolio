import { Html, useProgress } from "@react-three/drei";

// This component renders a loader with progress percentage using React Three Fiber
const CanvasLoader = () => {
  // The useProgress hook provided by @react-three/drei returns an object with the progress value
  const { progress } = useProgress();

  return (
    <Html>
      {/* A simple element with the class "canvas-load" */}
      <span className="canvas-load"></span>

      {/* A paragraph element displaying the progress percentage */}
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {/* The progress value is displayed with two decimal places */}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
