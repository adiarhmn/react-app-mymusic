import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = lazy(() => import('../App'));

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

// Loading Components for Suspense
const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span className='font-semibold'>Loading...</span>
    </div>
  );
};
