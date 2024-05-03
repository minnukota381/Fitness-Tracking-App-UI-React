import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateWorkout from './pages/CreateWorkout';
import WorkoutList from './pages/WorkoutList';
import Workout from './pages/Workout';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts/create" element={<CreateWorkout />} />
        <Route path="/workouts" element={<WorkoutList />} />
        <Route path="/workouts/:id" element={<Workout />} />
      </Routes>
    </div>
  );
}

export default App;

