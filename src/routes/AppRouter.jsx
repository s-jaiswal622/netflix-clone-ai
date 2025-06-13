import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import routeConfig from "./routeConfig";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Suspense fallback={<div className="text-center text-gray-400 h-screen"></div>}>
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
