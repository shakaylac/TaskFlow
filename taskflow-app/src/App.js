import './CSS/App.css';
import Container from './Pages/Container.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './Pages/Calendar.js';
import Kanban from './Pages/Kanban.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/" element={<Container />} />
      </Routes>
    </Router>
  
  );
}

export default App;
