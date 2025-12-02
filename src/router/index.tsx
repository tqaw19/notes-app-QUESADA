import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { DashboardPage } from "@pages/dashboard";
import { Layout } from "@components/Layout";
import { NoteCreatePage } from "@pages/notes/note-create";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="notes/create" element={<NoteCreatePage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          {/*<Route path="notes/:id/edit" element={<NoteEditPage />} />
          <Route path="notes/:id" element={<NoteDetailsPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
