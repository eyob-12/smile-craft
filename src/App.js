import React, { createContext, Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import SignInForm from './components/Login/LoginMain/SignInForm';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AppointMent from './components/AppointMent/AppointMent/AppointMent';
import AllPatients from './components/AppointMent/AllPatients/AllPatients';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import DoctorList from './components/Dashboard/DoctorList/DoctorList';
import AddReview from './components/Dashboard/My Review/AddReview';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import PageNotFound from './components/Shared/PageNotFound/PageNotFound.jsx';
import PreLoad from './components/Shared/Preload/PreLoad';

const Home2 = lazy(() => import('./components/Home/Home/Home'));

export const UserContext = createContext();

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Suspense fallback={<PreLoad />} ><Home /></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<PreLoad />} ><SignInForm /></Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={<PreLoad />} ><Dashboard /></Suspense>} />
          <Route path="/patients" element={<Suspense fallback={<PreLoad />} ><AllPatients /></Suspense>} />
          <Route path="/addDoctor" element={<Suspense fallback={<PreLoad />} ><AddDoctor /></Suspense>} />
          <Route path="/doctors" element={<Suspense fallback={<PreLoad />} ><DoctorList /></Suspense>} />
          <Route path="/auth/review" element={<Suspense fallback={<PreLoad />} ><AddReview /></Suspense>} />
          <Route path="/appointment" element={
            <PrivateRoute>
              <Suspense fallback={<PreLoad />} ><AppointMent /></Suspense>
            </PrivateRoute>
          } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
