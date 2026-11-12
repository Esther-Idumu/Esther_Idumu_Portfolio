import { Routes, Route, Navigate } from 'react-router-dom';
import CursorFollower from './components/CursorFollower/CursorFollower';
import ScrollManager from './components/ScrollManager/ScrollManager';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage/ProjectPage';

// Each URL shows one page. Add a new <Route> here when you add another page.
export default function App() {
  return (
    <>
      <CursorFollower />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}