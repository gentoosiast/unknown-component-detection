import { CompoundComponent } from './CompoundComponent';
import './App.css'

function App() {
  return (
    <CompoundComponent>
      <CompoundComponent.Component1 />
      <CompoundComponent.Component2 />
    </CompoundComponent>
  );
}

export default App
