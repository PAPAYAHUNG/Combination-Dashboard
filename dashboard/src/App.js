import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import {TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
