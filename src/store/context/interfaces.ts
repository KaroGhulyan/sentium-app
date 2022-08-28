
export type UseReducerType<S, A> = (state: S, action: A) => S

export interface UIConfigInitialStateInterface {
  theme: string
}

export type UIConfigActionType = { type: string; payload: string }

export interface UIConfigStateContextInterface {
  UIConfigState: UIConfigInitialStateInterface
  dispatchUIConfigState: (props: UIConfigActionType) => void
}

