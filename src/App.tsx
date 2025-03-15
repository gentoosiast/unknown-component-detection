import { CompoundComponent } from './CompoundComponent';
import { UnknownComponent } from './UnknownComponent';
import './App.css'

function App() {
  // pass UnknownComponent or text string as a child and see what happens
  return (
    <CompoundComponent>
      <CompoundComponent.Component1 />
      <CompoundComponent.Component2>
        hello, it's component 2
      </CompoundComponent.Component2>
    </CompoundComponent>
  );
}

export default App
