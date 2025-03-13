import { CompoundComponent } from './CompoundComponent';
import { Component3 } from './Component3';
import './App.css'

function App() {
  // pass Component3 as child and see what happens
  return (
    <CompoundComponent>
      <CompoundComponent.Component1 />
      <CompoundComponent.Component2 />
    </CompoundComponent>
  );
}

export default App
