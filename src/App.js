
import Form from './components/form';
import Menu from './components/menu';
import Produits from './components/produits';
import Caroussel from './components/caroussel';
import './App.css';
import Counter from './components/counter';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router= createBrowserRouter([
  
  {
    path :'/produits',
    element: <Produits/>
  },
  {
    path :'/form',
    element: <Form/>
  },
  {
    path :'/',
    element: <Caroussel/>
  },
  {
    path :'/counter',
    element: <Counter/>
  },

]);
function App() {
  return (
    <div className=''>
      <Menu />
      <RouterProvider router={router}/>
    </div>
  );


}

export default App;
