// src/components/Overlay.jsx
// --- FIX IS HERE ---
import { Scroll } from "@react-three/drei";

export const Overlay = () => {
  return (
    <Scroll html>
      {/* Act I */}
      <div className="w-screen h-screen flex justify-start items-center p-24">
        <div className="text-left max-w-lg">
          <h1 className="text-5xl font-bold text-white leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
            The Origin Bean
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Every great coffee begins with a single bean. A universe of flavor, waiting to unfold.
          </p>
          <p className="text-gray-400 text-2xl mt-12 animate-bounce">↓</p>
        </div>
      </div>

      {/* Add invisible divs to create scroll length */}
      <div className="w-screen h-screen"></div>
      <div className="w-screen h-screen"></div>
      <div className="w-screen h-screen"></div>
    </Scroll>
  );
};