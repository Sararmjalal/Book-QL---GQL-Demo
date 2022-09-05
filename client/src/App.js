import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Book from "./pages/Book";
import Author from "./pages/Author";
import CreateBook from "./pages/CreateBook";
import CreateAuthor from "./pages/CreateAuthor";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:id' element={<Book />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/authors/:id' element={<Author />} />
          <Route path='/createbook' element={<CreateBook />} />
          <Route path='/createauthor' element={<CreateAuthor />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
