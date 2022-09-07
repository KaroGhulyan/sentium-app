import React, { createContext, ReactElement, ReactNode, useReducer } from 'react'
import {
  UIConfigActionType,
  UIConfigInitialStateInterface,
  UIConfigStateContextInterface, UseReducerType,
} from './interfaces'
import { ContextProviderPropsInterface } from '../interfaces'
import { UIConfigInitialState } from './initialState'
import UIConfigStateReducer from './reducer'

export const UIConfigContext = createContext<UIConfigStateContextInterface>(
  {} as UIConfigStateContextInterface,
)

export const UIConfigProvider: React.FC<ContextProviderPropsInterface> = ({children}):ReactElement => {
  const [UIConfigState, dispatchUIConfigState] = useReducer<
    UseReducerType<UIConfigInitialStateInterface, UIConfigActionType>
    >(UIConfigStateReducer, UIConfigInitialState)

  return (
    <UIConfigContext.Provider
      value={{
        UIConfigState,
        dispatchUIConfigState,
      }}
    >
      {children as ReactNode}
    </UIConfigContext.Provider>
  )
}
