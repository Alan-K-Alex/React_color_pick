import logo from './logo.svg';
import './App.css';

import {SketchPicker,ChromePicker} from 'react-color'
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'


function App() {

  const [curr_color,setcurrcol]=useState("#0000FF");
  const [st,setst]=useState(false);

  const handleChange = (color)=>{

    setcurrcol(color.hex);
    setst(!st);

  }

  const handleClick = ()=>{

    console.log(st);
    setst(!st);
  }

  const but_col = {

    backgroundColor:curr_color

  }

  const col_pick = {

    displayColorPicker:st
  }



  return (
    <div className="App" >
      
      <h1 >cOLOR pICKER</h1>

      { st ? 
          <ChromePicker style={col_pick} color={curr_color} onChange={handleChange}/>
         : null }


<button class="btn btn-primary" onClick={handleClick} style={but_col}>Change my color</button>

    </div>
  );
}

export default App;
