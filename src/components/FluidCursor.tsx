'use client';

import { useEffect } from 'react';
import useFluidCursor from '../hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    // Initialize the fluid cursor effect
    useFluidCursor();
  }, []);

  return (
    <canvas
      id="fluid"
      className="fixed inset-0 w-full h-full pointer-events-none z-50"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
};

export default FluidCursor;
