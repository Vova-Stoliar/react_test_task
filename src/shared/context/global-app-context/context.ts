import { createContext } from 'react';
import { Nullable } from '@/shared/types';
import { AppContext } from './types';

export const GlobalAppContext = createContext<Nullable<AppContext>>(null);
