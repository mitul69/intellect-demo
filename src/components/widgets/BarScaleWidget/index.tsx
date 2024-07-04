import React, { useState } from 'react';

import './style.css'

/**
 * BarScaleWidget Component
 * @returns {JSX.Element}
 */
const BarScaleWidget = (): JSX.Element => {
  const [selectedBar, setSelectedBar] = useState<number>(0);

  return (
    <div className='bar-scale-widget-container'>
      <div className='text-center'>Low</div>
      <div className='funnel grid grid-cols-1 gap-1'>
        {[5, 4, 3, 2, 1].map((bar: number) => (
          <div
            key={bar}
            style={{ width: (40 * bar) }}
            className={`segment ${selectedBar >= bar ? 'selected' : ''}`}
            onClick={() => setSelectedBar(bar)}
          >
          </div>
        ))}

      </div>
    </div>
  );
};

export default BarScaleWidget;