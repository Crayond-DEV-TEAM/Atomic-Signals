import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, NotFound } from "../pages";
import PrivateRouter from "./privateRouter";
import { ROUTES } from "./routes";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route
          path={ROUTES.HOME}
          element={
            <PrivateRouter path={ROUTES.HOME}>
              <Home />
            </PrivateRouter>
          }
        />

        {/* Login Route */}
        <Route path={ROUTES.LOGIN} element={<Login />} />

        {/* For unknow/non-defined path */}
        <Route path={ROUTES.WILDCARD} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
