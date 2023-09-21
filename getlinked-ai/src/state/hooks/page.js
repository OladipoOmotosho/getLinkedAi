import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppState, AppDispatch } from '../store/page';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
