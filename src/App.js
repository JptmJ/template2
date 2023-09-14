// import { useEffect } from 'react';
import './App.css';
import Button1 from './useEffect';
import ColorState from './useState.js';
import MainComp from './ContextComp/MainComp';
import useCustomHook from './CustomHook';
import { AppProvider } from './ContextComp/CompA';

function App() {
  const data = useCustomHook();
  return (
    <>
      {/* this is useState */}
      <h2>This is UseState Example</h2>
      <ColorState />

      {/* this is useEffect */}
      <h2>This is UseEffect Example</h2>
      <Button1 />

      {/* this is useContext */}
      <h2>This is UseContext Example</h2>
      <AppProvider>
        <MainComp />
      </AppProvider>

      {/* this is Custom Hook */}
      <h2>This is Custom Hook Example</h2>
      <h1>This content is {data}</h1>
    </>
  );
}

export default App;
