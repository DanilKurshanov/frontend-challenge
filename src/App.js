import { Routes, Route, HashRouter } from 'react-router-dom';

import NavigationComponent from "./routes/navigation/navigation.component";
import HomeComponent from "./routes/home/home.component";
import FavoriteCatsComponent from "./routes/favorite-cats/favorite-cats.component";

import './App.css';


function App() {
  return (
      <HashRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route path='frontend-challenge/' element={<NavigationComponent />}>
                  <Route index element={<HomeComponent />} />
                  <Route path='favorite_cats' element={<FavoriteCatsComponent />} />
              </Route>
          </Routes>
      </HashRouter>
  );
}

export default App;
