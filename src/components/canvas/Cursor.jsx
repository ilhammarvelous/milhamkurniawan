import { Canvas } from "@react-three/fiber";
import ParticleCursor from "../ParticleCursor";

const CursorCanvas = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas 
            camera={{ position: [0, 0, 5] }} 
            gl={{ alpha: true }} 
            style={{ background: "transparent" }}
        >
            <ambientLight intensity={1} />
            <ParticleCursor />
        </Canvas>
        </div>
    );
};

export default CursorCanvas;