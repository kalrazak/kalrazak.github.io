'use client';
import { useEffect } from 'react';

import fluidCursor from '../hooks/use-FluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const canvas = document.getElementById('fluid') as HTMLCanvasElement;
      if (canvas) {
        console.log('Fluid cursor canvas found, initializing...');
        // Ensure canvas has proper dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        fluidCursor();
      } else {
        console.error('Fluid cursor canvas not found');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full z-[3] pointer-events-none'>
              <canvas 
          id='fluid' 
          className='w-full h-full block pointer-events-none'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
    </div>
  );
};
export default FluidCursor;
