import { SyntheticEvent, useState } from "react";

/** useSyntheticEventState:
 * This is a custom react hook that can be used to toggle styling based on a synthetic event.
 * There are two ways to use this hook.
 * 1. By using the activate or deactive functions
 * 2. By using the toggle function, this one can be secured by passing an array of synthetic event types
 * on which the toggle function should be triggered.
 * @param eventTypes array of the synthetic events which should trigger a state toggle.
 * @returns The active state and the functions to update the state (toggle, activate, deactivate)
 */

export const useSyntheticEventState = (eventTypes?: string[]) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveState = (event?: SyntheticEvent) => {
    if (event?.type && eventTypes?.includes(event.type)) {
      setIsActive((prevState) => !prevState);
    }
  };

  const activate = () => (!isActive ? setIsActive(true) : undefined);
  const deactivate = () => (isActive ? setIsActive(false) : undefined);

  return {
    activate,
    deactivate,
    isActive,
    toggleActiveState,
  };
};
