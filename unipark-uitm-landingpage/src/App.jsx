import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import Limitation from './pages/Limitation';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/how-to-use' element={<HowToUse />}></Route>
                <Route path='/limitation' element={<Limitation />}></Route>
            </Routes>
        </Router>
    )
}

export default App
