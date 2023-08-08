import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Startpage from "./components/Startpage";
import Mainpage from './components/Mainpage';

function App(){
  return (
        <BrowserRouter>
        <Routes>
          <Route index element={<Startpage />} />
          <Route path="/Startpage" element={<Startpage />} />
          <Route path="/Mainpage" element={<Mainpage />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
