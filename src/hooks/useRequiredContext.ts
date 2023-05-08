import { useContext } from 'react';

export default function useRequiredContext<T>(
  context: React.Context<T | null>
): T {
  const contextValue = useContext(context);
  if (contextValue === null) {
    throw Error('Context was not provided!');
  }
  return contextValue;
}
