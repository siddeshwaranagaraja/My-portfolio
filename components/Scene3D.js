import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.8, 128, 128]} position={[2.5, 0, 0]}>
        <MeshDistortMaterial
          color="#6c5ce7"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#6c5ce7"
          emissiveIntensity={0.15}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const count = 2000;
  const meshRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const color1 = new THREE.Color('#6c5ce7');
    const color2 = new THREE.Color('#00cec9');
    const color3 = new THREE.Color('#fd79a8');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const colorChoice = [color1, color2, color3][Math.floor(Math.random() * 3)];
      cols[i * 3] = colorChoice.r;
      cols[i * 3 + 1] = colorChoice.g;
      cols[i * 3 + 2] = colorChoice.b;
    }
    return [pos, cols];
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.03;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function FloatingRings() {
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.3;
      ring1.current.rotation.z = t * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.x = t * 0.2 + 1;
      ring2.current.rotation.y = t * 0.3;
    }
  });

  return (
    <>
      <mesh ref={ring1} position={[2.5, 0, 0]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#6c5ce7" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2} position={[2.5, 0, 0]}>
        <torusGeometry args={[3.2, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00cec9" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

export default function Scene3D() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#6c5ce7" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#00cec9" />
        <AnimatedSphere />
        <ParticleField />
        <FloatingRings />
        <Stars radius={100} depth={50} count={1000} factor={3} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
}
