import { createContext, useState, useEffect } from 'react';

import { useMoralis, useMoralisQuery } from 'react-moralis';

export const NFTContext = createContext();

export const NFTProvider = ({ children }) => {
    return (
        <NFTContext.Provider value = {{}}>
            {children}
        </NFTContext.Provider>
    )
}