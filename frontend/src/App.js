import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listing from './page/Listing/index.js'
import Form from './page/Form/index.js'
import Navbar from './components/Navbar/index.js'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Listing />} />
        <Route path='/form'>
          <Route path=':movieId' element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
