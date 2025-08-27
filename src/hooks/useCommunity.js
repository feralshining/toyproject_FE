import { useContext } from 'react';
import { CommunityContext } from '../contexts/CommunityContext';

export const useCommunity = () => {
    return useContext(CommunityContext);
};
