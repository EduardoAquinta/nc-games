//Dependencies
import './App.css';
import { BrowserRouter, Routes, Route} from  'react-router-dom';

//Components
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ReviewList from './Components/ReviewsList';
import UsersList from './Components/UsersList';
import CategoryList from './Components/ReviewCategories';


//Run
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewList/>} />
        <Route path="/users" element={<UsersList />} /> 
        <Route path="/categories" element={<CategoryList />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
