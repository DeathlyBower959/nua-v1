'use client';

import { useTheme } from 'next-themes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/ui/select';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='system'>System</SelectItem>
        <SelectItem value='light'>Light</SelectItem>
        <SelectItem value='dark'>Dark</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default ThemeSwitch;
