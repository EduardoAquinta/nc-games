//Dependencies
import './App.css';
import { BrowserRouter, Routes, Route} from  'react-router-dom';

//Components
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
//import ReviewList from './Components/ReviewsList';
import UsersList from './Components/UsersList';
import Reviews from './Components/Reviews';
import CategoryList from './Components/ReviewCategories';
import SingleReview from './Components/SingleReview';


//Run
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<CategoryList/>} />
        <Route path="/users" element={<UsersList />} /> 
        <Route path="/categories/:category_name" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
