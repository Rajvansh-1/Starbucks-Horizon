import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const CameraAnimations = () => {
  const scroll = useScroll(); // This hook gives us the scroll progress
  const timeline = useRef();

  // useFrame runs on every rendered frame
  useFrame((state, delta) => {
    // We update the timeline's progress based on the scroll position
    if (timeline.current) {
      timeline.current.seek(scroll.offset * timeline.current.duration());
    }
  });

  // useLayoutEffect runs after the component has been rendered
  useLayoutEffect(() => {
    timeline.current = gsap.timeline({ defaults: { duration: 2, ease: "power1.inOut" } });

    // Define the camera's animation path
    timeline.current
      .to("camera.position", { z: 5 }, 0) // Zoom out a bit
      .to("camera.position", { x: 2, z: 12 }, 4) // Move to the side
      .to("camera.position", { y: -2, z: 8 }, 8); // Move down
  }, []);

  return null; // This component doesn't render anything visible
};