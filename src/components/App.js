import { BrowserRouter, Routes, Route} from "react-router-dom";
import '../Styles/App.css';
import Layout from './Layout';

import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';
import Summary from './Summary';

function App() {
  return (
      <BrowserRouter>
      <Layout>
        <Routes>

             
             <Route path="/"  element={<Home/>} />
             <Route path="/signup" element={<Signup/>} />
             <Route path="/login" element={<Login/>} />
             <Route path="/quiz" element={<Quiz/>} />
             <Route path="/summary" element={<Summary/>} />
             <Route path="/result" element={<Result/>} />
           
        </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
