import PageNotFound from '@pages/404';
import Career from '@pages/career';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Career />}></Route>
      <Route path='/404' element={<PageNotFound />}></Route>
      <Route path='*' element={<Navigate replace to={'/404'} />}></Route>
    </Routes>
  );
};

export default App;
