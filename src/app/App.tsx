import './styles/style.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { MainPage } from '../pages/MainPage';
import { UsefulPage } from '../pages/UsefulPage';

const App = (): JSX.Element => {
  return (
    <div className='bg-slate-500'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/useful'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/useful' element={<UsefulPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
