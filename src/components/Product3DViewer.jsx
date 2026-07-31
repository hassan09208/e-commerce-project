import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';

// Simple geometric representation for products
const ProductModel = ({ color, type }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        {type === 'watch' && (
          <>
            {/* Watch case */}
            <cylinderGeometry args={[1.5, 1.5, 0.3, 32]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
          </>
        )}
        {type === 'tech' && (
          <>
            {/* Tech device */}
            <boxGeometry args={[2, 3, 0.2]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
          </>
        )}
        {type === 'audio' && (
          <>
            {/* Headphones */}
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
          </>
        )}
        {type === 'fashion' && (
          <>
            {/* Fashion item */}
            <boxGeometry args={[1.5, 2, 0.5]} />
            <meshStandardMaterial color={color} metalness={0.3} roughness={0.7} />
          </>
        )}
        {!type && (
          <>
            {/* Default */}
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
          </>
        )}
      </mesh>
    </Float>
  );
};

const Product3DViewer = ({ color, type, className }) => {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          
          <ProductModel color={color} type={type} />
          
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={3}
            maxDistance={8}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
          
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Product3DViewer;
