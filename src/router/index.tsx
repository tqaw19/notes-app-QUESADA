import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { DashboardPage } from "../pages/dashboard";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="notes/create" element={<NoteCreatePage />} />
          <Route path="notes/:id/edit" element={<NoteEditPage />} />
          <Route path="notes/:id" element={<NoteDetailsPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
