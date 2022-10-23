import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/homePage';
import { UserPage } from '../pages/userPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/userPage' element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
