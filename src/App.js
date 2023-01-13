import React, { useState} from 'react';
import './App.css';
import ListaDeTareas from './Componentes/ListaDeTareas';


function App(){           
return (
      <div className="App">
          <div className='aplicacion-tareas'>
            <h1 className='title'>Lista de tareas</h1>
              <div className='tareas-lista-principal'>
                <h2>Mis Tareas</h2>
                  <ListaDeTareas/>
                </div>
          </div>          
      </div>
 );
};

export default App;
