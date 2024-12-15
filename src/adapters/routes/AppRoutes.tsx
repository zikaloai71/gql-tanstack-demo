import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "../controllers/pages/users";
import { UserForm } from "../controllers/domains/Users/UserForm";
import NotFound from "../controllers/NotFound";

export const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/users/new" element={<UserForm />} />
      <Route path="/users/edit/:id" element={<UserForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
