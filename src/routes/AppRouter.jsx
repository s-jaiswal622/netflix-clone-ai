import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import routeConfig from "./routeConfig";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map(({ path, component: Component, isProtected }) =>
          isProtected ? (
            <Route element={<ProtectedRoute />} key={path}>
              <Route path={path} element={<Component />} />
            </Route>
          ) : (
            <Route path={path} element={<Component />} key={path} />
          )
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
