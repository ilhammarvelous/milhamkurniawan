// import { Suspense } from "react"
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from '../Loader';

// const Earth = () => {
//   const earth = useGLTF('/planet/scene.gltf')

//   return (
//     <primitive 
//       object={earth.scene}
//       scale={2.5}
//       position-y={0}
//       rotation-y={0}
//     />
//   )
// }

// const EarthCanvas = () => {
//   return(
//     <Canvas
//       shadows
//       frameloop='demand'
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{ 
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6]
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls 
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />
//       </Suspense>
//     </Canvas>
//   )
// }

// export default EarthCanvas;

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("/planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 2 : 2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;