import React, { Suspense, lazy, useState } from 'react';
import './App.css';
import Counter from './components/Counter';

// Lazy load the Settings component
const LazySettings = lazy(() => import('./components/LazySettings'));

function App() {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Advanced Demo</h1>
        <Counter initialValue={5} />
        
        <div className="settings-container">
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="settings-button"
          >
            {showSettings ? 'Hide Settings' : 'Show Settings'}
          </button>
          
          {showSettings && (
            <Suspense fallback={<div>Loading Settings...</div>}>
              <LazySettings />
            </Suspense>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;