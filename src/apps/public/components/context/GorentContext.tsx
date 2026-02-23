import { createContext } from 'react';
import type { ContextType } from './ContextType';

const GorentContext = createContext<ContextType | null>(null)
export default GorentContext;