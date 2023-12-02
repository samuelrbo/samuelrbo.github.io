import PageNotFound from '@pages/404';
import Career from '@pages/career';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Career />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default App;
