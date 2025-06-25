import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftSidebar from './components/layout/LeftSidebar';
import MusicPlayerBar from './components/layout/MusicPlayerBar';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PlaylistPage from './pages/PlaylistPage';
import ArtistPage from './pages/ArtistPage';
import LibraryPage from './pages/LibraryPage';

function App() {
  return (
    <Router>
      <div className="relative flex h-screen w-full overflow-hidden">
        <LeftSidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/playlist/:id" element={<PlaylistPage />} />
              <Route path="/artist/:id" element={<ArtistPage />} />
              <Route path="/library" element={<LibraryPage />} />
            </Routes>
          </main>
        </div>
        <MusicPlayerBar />
      </div>
    </Router>
  );
}

export default App;