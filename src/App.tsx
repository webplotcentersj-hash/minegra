import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScreenManager } from './components/ScreenManager';
import { PublicRanking } from './components/screens/PublicRanking';
import { AdminPanel } from './components/screens/AdminPanel';

function App() {
  return (
    <Router>
      <main className="w-full min-h-screen font-sans relative overflow-x-hidden">
        <Routes>
          <Route path="/" element={<ScreenManager />} />
          <Route path="/ranking" element={<PublicRanking />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
