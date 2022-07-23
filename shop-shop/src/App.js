import { Routes, Route } from 'react-router-dom'

import Home from './components/routes/home/home.component'
import Navigation from "./components/routes/Navigation/navigation.component";

const Lifestyle = () => {
    return (
        <div>
            <h1>Lifestyle</h1>
        </div>
    )
}
const  App = () => {
 return(
     <Routes>
         <Route path='/' element={< Navigation />}>
             <Route index  element={<Home />} />
             <Route path='/lifestyle'  element={<Lifestyle />} />
         </Route>
     </Routes>
 );
};

export default App;


