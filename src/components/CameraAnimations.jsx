// src/components/CameraAnimations.jsx
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const CameraAnimations = () => {
  const scroll = useScroll();
  const timeline = useRef();
  const { camera } = useThree(); // Get a reference to the scene's camera

  useFrame(() => {
    if (timeline.current) {
      timeline.current.seek(scroll.offset * timeline.current.duration());
    }
  });

  useLayoutEffect(() => {
    timeline.current = gsap.timeline({ defaults: { duration: 2, ease: "power1.inOut" } });

    // Use the actual camera object as the target
    timeline.current
      .to(camera.position, { z: 5 }, 0)
      .to(camera.position, { x: 2, z: 12 }, 4)
      .to(camera.position, { y: -2, z: 8 }, 8);
  }, [camera]);

  return null;
};