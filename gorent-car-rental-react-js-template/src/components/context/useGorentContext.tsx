import { useContext } from 'react';
import GorentContext from './GorentContext';
import type { ContextType } from './ContextType';

const useGorentContext = (): ContextType => {
    const context = useContext(GorentContext);
    if (context === null) {
        throw new Error("useGorentContext must be used within a ContextProvider");
    }
    return context;
};

export default useGorentContext;