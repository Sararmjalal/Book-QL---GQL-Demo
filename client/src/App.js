import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Book from "./pages/Book";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:id' element={<Book />} />
          <Route path='/authors' element={<Authors />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
