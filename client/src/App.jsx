
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Developments } from './pages/Developments';
import { Categories } from './pages/Categories';
import { Contact } from './pages/Contact';
import { Residential } from './pages/Residential';
import { Residential2BR } from './pages/Residential2BR';
import { Residential3BR } from './pages/Residential3BR';
import { Residential4BR } from './pages/Residential4BR';
import { Comingsoon } from './pages/Comingsoon';
import { LoadingPage } from './components/LoadingPage';
import { Projectcomponent } from "./components/Projectcomponent";
import { ProjectonHome } from './components/ProjectonHome';
import { Allprojects } from './pages/Allprojects';
import { useState, useEffect } from 'react';

function App() {
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  // Simulate an asynchronous action, e.g., fetching data from an API
  setTimeout(() => {
    setIsLoading(false);
  }, 4000);
  }, []);

 return (

    <>
    {isLoading ? (
      <LoadingPage />
    ) : (
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/" element={<Home/>}/>
          <Route path='/residential' element={<Residential/>}/>
          <Route path='/residential2BR' element={<Residential2BR/>}/>
          <Route path='/residential3BR' element={<Residential3BR/>}/>
          <Route path='/residential4BR' element={<Residential4BR/>}/>
          <Route path="/developments" element={<Developments/>}/>
          <Route path="/projectcomponent" Component={<Projectcomponent/>}/>
          <Route path="/projectonhome" Component={<ProjectonHome/>}/>
          <Route path="/allprojects" element={<Allprojects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path='/comingsoon' element={<Comingsoon/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/loading" element={<LoadingPage/>}/>
        </Routes>
    )}
    </>
 );
}

export default App;