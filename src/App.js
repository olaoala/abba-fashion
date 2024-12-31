import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';

// Import other pages as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      
    </Router>
    
  );
};

export default App;
