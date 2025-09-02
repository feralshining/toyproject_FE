import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CommunityProvider } from './contexts/CommunityContext';
import Home from './pages/Home';
import Community from './pages/Community';
import PostDetail from './pages/PostDetail';
import PostWrite from './pages/PostWrite';

function App() {
    return (
        {/* <CommunityProvider> */ }
        < Router >
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/community' element={<Community />} />
            <Route path='/post/:id' element={<PostDetail />} />
            <Route path='/write' element={<PostWrite />} />
        </Routes>
        </Router >
        {/* </CommunityProvider> */ }
    )
}

export default App;
