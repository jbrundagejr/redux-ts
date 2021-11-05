// replaces useSelector so TS knows type of state
import {useSelector, TypedUseSelectorHook} from 'react-redux'
import { RootState } from '../state'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector