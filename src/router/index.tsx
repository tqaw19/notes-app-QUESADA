import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { DashboardPage } from "@pages/dashboard";
import { Layout } from "@components/Layout";
import { EditNotePage } from "@pages/notes/edit-note";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="notes/:id/edit" element={<EditNotePage />} />
          {/* <Route path="notes/:id" element={<NoteDetailsPage />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
