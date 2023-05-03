import React from 'react';
import TaskList from './lists/TaskList';

/**
 * Función Anónima para crear un Componente Principal
 * @returns {React.component} Componente principal de nuestra aplicación
 */
function App() {
  return (
    <div>
      <h1>Mr. Batatas wonderfull App</h1>
      <h3>Bienvenido!</h3>
      <TaskList />
    </div>
  );
}

export default App;
