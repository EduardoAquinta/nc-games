//Dependencies
import './App.css';
import { BrowserRouter, Routes, Route} from  'react-router-dom';

//Components
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
//import ReviewList from './Components/ReviewsList';
import UsersList from './Components/UsersList';
import ReviewsByCategory from './Components/ReviewsByCategories';
import CategoryList from './Components/ReviewCategories';
import SingleReview from './Components/ReviewPage';


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
        <Route path="/reviews/:category_name" element={<ReviewsByCategory />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
