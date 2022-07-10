import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import {TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css';
import Home from './Pages/Home';
import Ecommerce from './Components/Ecommerce/Ecommerce';
import Order from './Components/Pages/Order';
import Employee from './Components/Pages/Employee';
import Customers from './Components/Pages/Customers';
import Calendar from './Components/Apps/Calendar';
import Kanban from './Components/Apps/Kanban';
import Editor from './Components/Apps/Editor';
import ColorPicker from './Components/Apps/ColorPicker';
import Line from './Components/Charts/Line';
import Area from './Components/Charts/Area';
import Bar from './Components/Charts/Bar';
import Pie from './Components/Charts/Pie';
import Financial from './Components/Charts/Financial';
import ColorMapping from './Components/Charts/ColorMapping';
import Pyramid from './Components/Charts/Pyramid';
import Stacked from './Components/Charts/Stacked';
import { Component } from 'react';
import ThemeProvider from './context/ThemeProvider/ThemeProvider';
import SettingButton from './Components/SmallComponent/SettingButton';
import { useStateContext } from './context/ContextProvider';

function App() {
  const {isOpenSetttingBar, setIsOpenSetttingBar} = useStateContext()
  return (
    <div className="App">
      <SettingButton/>
     {isOpenSetttingBar &&  <ThemeProvider/>}
      <Routes>
        <Route path='/' element={<Home/>}>
            <Route path='/' element={<Ecommerce/>} />
            <Route path='ecommerce' element={<Ecommerce/>} />
            <Route path='orders' element={<Order/>} />
            <Route path='employees' element={<Employee/>} />
            <Route path='customers' element={<Customers/>} />
            <Route path='calendar' element={<Calendar/>} />
            <Route path='kanban' element={<Kanban/>} />
            <Route path='editor' element={<Editor/>} />
            <Route path='line' element={<Line/>} />
            <Route path='area' element={<Area/>} />
            <Route path='bar' element={<Bar/>} />
            <Route path='pie' element={<Pie/>} />
            <Route path='financial' element={<Financial/>} />
            <Route path='color-mapping' element={<ColorMapping/>} />
            <Route path='color-picker' element={<ColorPicker/>} />
            <Route path='pyramid' element={<Pyramid/>} />
            <Route path='stacked' element={<Stacked/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
