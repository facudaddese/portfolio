"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AosInit = () => {
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      AOS.init({
        duration: 900,
        once: false,
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return null;
};
