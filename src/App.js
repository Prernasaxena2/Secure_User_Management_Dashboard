// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUpPage from './pages/SignUpPage';
// import Home from './components/Home';
// import SignIn from './components/SignIn';

// // import Dashboard from './components/Dashboard';
// import Dashboard from './components/Dashboard';
// import PrivateRoute from './components/PrivateRoute';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path='/signin' element={<SignIn />} />

//         <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />



//         {/* <Route path="/dashboard" component={Dashboard} /> */}
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
    </Router>
  );
};

export default App;
