import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './style.css';

/**
 * CircularProgressBarWidget Component
 * @returns {JSX.Element}
 */
const CircularProgressBarWidget = (): JSX.Element => {
    const [value, setValue] = useState(0);

    return (<div className="circular-widget" >
        <div className='circular-widget-container'>
            <CircularProgressbar
                value={value * 10}
                text={`${value}`}
                styles={
                    buildStyles({
                        textSize: '24px',
                        pathTransitionDuration: 0.5,
                        backgroundColor: "red"
                    })
                }
            />
        </div>
        <input
            type="range"
            className='range-input'
            min="0"
            max="10"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
        />
    </div>
    );
};

export default CircularProgressBarWidget;