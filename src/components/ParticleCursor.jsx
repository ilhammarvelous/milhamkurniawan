import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleCursor = () => {
    const points = useRef();
    const mouse = useRef({ x: 0, y: 0 });
    const target = useRef(new THREE.Vector3());

    const count = 120;

  // posisi awal particle
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 0.1;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
            arr[i * 3 + 2] = 0;
        }
        return arr;
    }, []);

  // ✅ FIX: pakai useEffect (bukan di render)
    useEffect(() => {
        const handleMouseMove = (e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

  // animasi tiap frame
    useFrame(() => {
        if (!points.current) return;

        const posArray = points.current.geometry.attributes.position.array;

        // ubah mouse ke world position
        target.current.set(
            mouse.current.x * 2,
            mouse.current.y * 2,
            0
        );

        // efek trail
        for (let i = count - 1; i > 0; i--) {
            posArray[i * 3] = posArray[(i - 1) * 3];
            posArray[i * 3 + 1] = posArray[(i - 1) * 3 + 1];
        }

        // kepala particle (ikut mouse)
        posArray[0] += (target.current.x - posArray[0]) * 0.2;
        posArray[1] += (target.current.y - posArray[1]) * 0.2;

        points.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={points}>
        <bufferGeometry>
            <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
            />
        </bufferGeometry>

        <pointsMaterial
            size={0.3}
            color="#915eff"
            transparent
            opacity={0.9}
            blending={THREE.AdditiveBlending} // 🔥 glow effect
            depthWrite={false}
        />
        </points>
    );
};

export default ParticleCursor;