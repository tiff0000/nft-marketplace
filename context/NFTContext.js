import { createContext, useState, useEffect } from 'react';

import { useMoralis, useMoralisQuery } from 'react-moralis';

export const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');

    const {
        authenticate,
        isAuthenticated,
        enableWeb3,
        Moralis,
        user,
        isWeb3Enabled,
    } = useMoralis()

    useEffect(() => {
        (async()=> {
            if (isAuthenticated) {
                const currentUsername  = await user?.get('nickname'); // get username from moralis db
                setUsername(currentUsername);
            }
        })()
    }, [isAuthenticated, user, username]); // run this when any of these variables change
    
    const handleSetUsername = () => {
        if (user) {
            if (nickname) {
                user.set('nickname', nickname); // add a column in the moralis db
                user.save();
                setNickname(''); // clear input field
            } else {
                console.log('cannot handle setUsername');
            }
        } else {
            console.log('No user');
        }
    }

    return (
        <NFTContext.Provider value = {{isAuthenticated, nickname, setNickname, username, setUsername}}>
            {children}
        </NFTContext.Provider>
    )
}