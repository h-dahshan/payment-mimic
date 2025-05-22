import React from "react";

type State = {
  name: string;
};
type SetState = React.Dispatch<React.SetStateAction<State>>;

export const useTest = (
  state: State
): { testState: State; setTestState: SetState } => {
  const [testState, setTestState] = React.useState(state);

  return { testState, setTestState };
};
