import {useCallback, useMemo, useState} from 'react';

/**
 * Store a toggle boolean state with utility methods
 * @param initialState The initial state
 * @returns A tuple containing the value and a function to update it
 * @example
 * const [isOpen, {toggle}] = useToggle();
 * return <button onClick={toggle}>Toggle Something</button>;
 */
export function useToggle(initialState = false) {
	const [state, setState] = useState(initialState);

	const handlers = {
		on: useCallback(() => setState(true), []),
		off: useCallback(() => setState(false), []),
		toggle: useCallback(() => setState(!state), [state]),
		reset: useCallback(() => setState(initialState), [initialState]),
	} as const;

	return [state, handlers] as const;
}
