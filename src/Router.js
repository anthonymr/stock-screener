import { Routes, Route } from 'react-router-dom';
import TestRoute from './routes/TestRoute';
import Test2Route from './routes/Test2Route';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestRoute />} />
        <Route path="test" element={<Test2Route />} />
      </Routes>
    </>
  );
}

export default Router;
