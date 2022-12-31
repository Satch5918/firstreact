import './App.css';

import indexRouter from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
            
        <RouterProvider router={ indexRouter }/>

    </div>
  );
}



export default App;
