import { UIConfigActionType, UIConfigInitialStateInterface, UseReducerType } from './interfaces'
import { UIConfigActionTypes } from './actions'


const UIConfigStateReducer: UseReducerType<UIConfigInitialStateInterface, UIConfigActionType> = (
  state,
  action,
): UIConfigInitialStateInterface => {
  switch (action.type) {
    case UIConfigActionTypes.SetTheme:
      return { ...state, theme: action.payload }
    default:
      return state
  }
}

export default UIConfigStateReducer