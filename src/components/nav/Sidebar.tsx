'use client';

import clsx from 'clsx';
import { Cross as Menu } from 'hamburger-react';
import { Search, Settings, Wrench } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import MemoDarkLogo from '~/atoms/logo/DarkLogo';
import MemoLightLogo from '~/atoms/logo/LightLogo';
import ThemeSwitch from '~/atoms/ThemeChanger';
import { useSettingsContext } from '~/providers/settings';
import { ISettings, settingsSchema } from '~/schema/settings';
import { Button } from '~/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/ui/dialog';
import { Input } from '~/ui/input';
import { Label } from '~/ui/label';
import { Separator } from '~/ui/separator';

import { zodResolver } from '@hookform/resolvers/zod';

import type { NextPage } from 'next';
import type { SubmitHandler } from 'react-hook-form';

const Sidebar: NextPage = () => {
  const theme = useTheme();
  const [settings, setSettings] = useSettingsContext();

  // const { register, handleSubmit, formState } = useForm<ISettings>({
  const { handleSubmit } = useForm<ISettings>({
    defaultValues: settings,
    resolver: zodResolver(settingsSchema),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onSubmit = useCallback<SubmitHandler<ISettings>>(
    (data: ISettings) => {
      setIsModalOpen(false);
      setSettings(data);
    },
    [setSettings]
  );

  const closeSideBar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  // Links: Utility
  // FIX: Sidebar animation (it drags as the inner animation finishes before the outer animation)
  return (
    <>
      <div className='absolute top-2 right-2 md:hidden z-[2]'>
        <Menu
          toggled={isSidebarOpen}
          toggle={() => setIsSidebarOpen(prev => !prev)}
        />
      </div>
      <div className='w-36 z-[1] animate-[animate-sidebar-on-load_250ms_ease-out] max-md:w-0'>
        <nav
          className={clsx(
            'h-screen group/navbar flex w-36 flex-col items-center justify-between bg-muted px-6 py-4 pt-8 transition-all  duration-500 ease-out md:hover:w-96 max-md:px-0',
            {
              ['max-md:w-[100vw]']: isSidebarOpen,
              ['max-md:w-0 overflow-hidden']: !isSidebarOpen,
            }
          )}
        >
          <div className='flex w-3/4 flex-col items-center justify'>
            <Link href='/' onClick={closeSideBar}>
              {theme.resolvedTheme === 'dark' ? (
                <MemoLightLogo className='h-8' />
              ) : (
                <MemoDarkLogo className='h-8' />
              )}
            </Link>
            <Separator className='my-5' />
            <div
              className={clsx(
                'flex w-full flex-col gap-5 transition-all duration-500 ease-out'
              )}
            >
              <div className='flex w-full justify-center gap-3'>
                <Search size={34} className='shrink-0' />
                <div
                  className={clsx(
                    'w-0 overflow-hidden transition-all delay-75 duration-500 ease-out md:group-hover/navbar:block md:group-hover/navbar:w-full',
                    {
                      ['max-md:w-full md:block']: isSidebarOpen,
                    }
                  )}
                >
                  <Input
                    placeholder='Search'
                    onChange={e => setSearchValue(e.target.value)}
                    value={searchValue}
                  />
                </div>
              </div>
              <Link href='/apps' onClick={closeSideBar}>
                <div className='flex w-full justify-center gap-3'>
                  <Wrench size={34} className='shrink-0' />
                  <div
                    className={clsx(
                      'w-0 overflow-hidden transition-all delay-75 duration-500 ease-out md:group-hover/navbar:block md:group-hover/navbar:w-full',
                      {
                        ['max-md:w-full block']: isSidebarOpen,
                      }
                    )}
                  >
                    <Label className='cursor-pointer text-xl'>
                      Applications
                    </Label>
                  </div>
                </div>
              </Link>
            </div>
            <Separator className='my-5' />
          </div>
          <div className='flex items-center'>
            <Dialog open={isModalOpen} onOpenChange={e => setIsModalOpen(e)}>
              <DialogTrigger>
                <Settings size={28} />
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                  <DialogDescription>
                    Make any changes to your settings here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                      <Label className='text-right'>Theme</Label>
                      <ThemeSwitch />
                    </div>

                    {/* <Separator />
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                  Name
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    className="col-span-3"
                  />
                  {formState.errors.name && (
                    <p className="text-sm col-span-2 col-start-3 text-right text-red-500">
                      {formState.errors.name.message}
                    </p>
                    )}
                </div> */}
                  </div>
                  <DialogFooter>
                    <Button type='submit'>Save changes</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
