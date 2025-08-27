import React, { createContext, useState } from 'react';

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
    const [communities, setCommunities] = useState([]);
    const [posts, setPosts] = useState([]);

    return (
        <CommunityContext.Provider value={{ communities, setCommunities, posts, setPosts }}>
            {children}
        </CommunityContext.Provider>
    );
};
