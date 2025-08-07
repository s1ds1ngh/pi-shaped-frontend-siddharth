import React, { useState, useMemo } from 'react';

interface CounterProps {
  initialValue?: number;
}

// This is an expensive computation function for demonstration purposes
const expensiveComputation = (num: number): number => {
  console.log('Performing expensive calculation...');
  // Simulate expensive operation
  for (let i = 0; i < 1000000; i++) {
    // Do nothing, just waste CPU cycles
  }
  return num * 2;
};

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue);
  const [otherState, setOtherState] = useState<number>(0);

  // Using useMemo to memoize the result of expensive computation
  const doubledCount = useMemo(() => {
    return expensiveComputation(count);
  }, [count]); // Only recalculate when count changes

  return (
    <div className="counter">
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <p>Doubled Count (memoized): {doubledCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Update Other State ({otherState})
      </button>
      <p>
        <small>
          Note: The "Update Other State" button demonstrates that the expensive
          computation is not re-run when unrelated state changes.
        </small>
      </p>
    </div>
  );
};

// Wrap with React.memo to prevent unnecessary re-renders
export default React.memo(Counter);