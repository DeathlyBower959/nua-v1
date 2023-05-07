'use client';

import { createContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import type { ISettings } from '~/schema/settings';

export const SettingsContext = createContext<
  [ISettings, React.Dispatch<React.SetStateAction<ISettings>>] | null
>(null);

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useLocalStorage<ISettings>('nua-settings', {
    sidebar: true,
  });

  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {children}
    </SettingsContext.Provider>
  );
}
