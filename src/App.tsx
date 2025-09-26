import { home } from
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Suspense, lazy } from 'react';


const Home = lazy(() => import('./pages/home').then(m => ({ default: m.home })));
const SessionDetails = lazy(() => import('./pages/SessionDetails').then(m => ({ default: m.SessionDetails })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Seção/:id" element={<SessionDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;

