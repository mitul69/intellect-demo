import React from 'react';
import './App.css';
import BarScaleWidget from './components/widgets/BarScaleWidget';
import CircularProgressBarWidget from './components/widgets/CircularProgressBarWidget';

function App() {
  return (
    <div className='app-container'>
      <div className='flex-col'>
        <div className='flex-50'><CircularProgressBarWidget /></div>
        <div className='flex-50'><BarScaleWidget /></div>
      </div>
    </div>
  );
}

export default App;
