import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../Store/index';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
