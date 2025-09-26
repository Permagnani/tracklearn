import { lazy, Suspense, useCallback, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fallback } from "./components/fallback";
import { Layout } from "./components/layout";
import { Loading } from "./components/loading";

import type { Study } from "./study";
import { AddStudy } from "../pages/add-study";

const Home = lazy(() =>
  import("./pages/home").then((m) => ({ default: m.Home }))
);

const NotFound = lazy(() =>
  import("./pages/not-found").then((m) => ({ default: m.NotFound }))
);

const AddStudy = lazy(() =>
  import("./pages/add-study").then((m) => ({ default: m.AddStudy }))
);

const SessionDetails = lazy(() =>
  import("./pages/sessions-details").then((m) => ({ default: m.SessionDetails }))
);

function App() {
  const [Study, setStudy] = useState<Study[]>([]);

  const removeStudy = useCallback((id: string) => {
    const studyToDelete = Study.findIndex((value) => {
      return value.id === id;
    });
    const updatedStudy = [...Study];

    updatedStudy.splice(studyToDelete, 1);

    setStudy(updatedStudy);
  }, []);

  // Renderiza somente uma vez
  const addStudy = useCallback((study: Study) => {
    setStudy((prev) => [...prev, study]);
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                 <Home studies={Study} removeStudy={removeStudy} />

                }
              />
              <Route
                path="/add"
                element={<AddStudy onAdd={addStudy} studies={Study} />}
              />
              <Route path="/workout/:id" element={<SessionDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;