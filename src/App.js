import './App.css';
import AppRouter from './routes/AppRouter.jsx';
import UserDashboard from './view/users/UserDashboard';

function App() {
  return (
    <div>
      <UserDashboard />
      <AppRouter />
    </div>
  );
}

export default App;
