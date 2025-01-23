import logo from './logo.svg';
import './App.css';
import { Header } from './mycomponents/Header';
import { Grid } from './mycomponents/Grid';
import { Home } from './mycomponents/Home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Grid/>
      <Home/>
    </div>
  );
}

export default App;
