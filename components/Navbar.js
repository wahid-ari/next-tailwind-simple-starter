import { useState } from 'react';
import Link from 'next/link';
import { Menu, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

import ActiveLink from './ActiveLink';
import ThemeChanger from './ThemeChanger';

function CustomActiveLink({ children, href }) {
  return (
    <ActiveLink
      href={href}
      activeClassName='!text-sky-500 dark:!text-sky-500'
      className={twMerge(
        'px-1 text-[15px] font-medium text-neutral-700 transition-all duration-200',
        'rounded hover:text-sky-500 dark:text-neutral-200 dark:hover:text-sky-500',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
      )}
    >
      {children}
    </ActiveLink>
  );
}

function GithubIcon() {
  return (
    <a
      href={process.env.REPO_URL}
      target='_blank'
      rel='noreferrer'
      className={twMerge(
        'text-sky-500 hover:text-sky-600 transition-all text-sm font-medium rounded p-1',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
      )}
    >
      <svg
        aria-hidden='true'
        viewBox='0 0 16 16'
        version='1.1'
        className='h-5 w-5 text-gray-700 dark:text-gray-200 dark:invert'
      >
        <path
          fillRule='evenodd'
          d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
        ></path>
      </svg>
    </a>
  );
}

const activeCn = twMerge(
  'block rounded px-3 py-1.5 text-[15px] font-medium',
  'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
);

export default function Navbar({ className, ...props }) {
  return (
    <Popover
      {...props}
      as='header'
      className={twMerge(
        'sticky top-0 z-10 border-b border-b-neutral-200/70 dark:border-b-neutral-800 ',
        'bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md backdrop-filter',
        className,
      )}
    >
      <div className='mx-auto max-w-7xl px-4 py-3'>
        <nav className='flex items-center justify-between'>
          {/* web logo  */}
          <Link
            href='/'
            passHref
            className='rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
          >
            <div className='flex items-center justify-center font-medium text-neutral-900 md:justify-start'>
              <span className='text-xl font-semibold text-neutral-800 dark:text-neutral-100'>Next</span>
            </div>
          </Link>
          {/* web logo  */}

          {/* Nav Link  */}
          <div className='hidden sm:block'>
            <div className='flex items-center space-x-4 md:space-x-6 lg:space-x-8'>
              <CustomActiveLink href='/'>Home</CustomActiveLink>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={twMerge(
                        'group flex items-center space-x-1.5 rounded px-1 text-[15px] font-medium transition-all duration-200',
                        ' text-neutral-700 hover:text-sky-500 dark:text-neutral-200 dark:hover:text-sky-500',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={twMerge(
                          open
                            ? 'rotate-180 transform transition-transform duration-300'
                            : 'transition-transform duration-300',
                          'h-4 w-4',
                        )}
                      />
                    </Popover.Button>
                    <Transition
                      enter='duration-200 ease-out'
                      enterFrom='opacity-0 scale-95'
                      enterTo='opacity-100 scale-100'
                      leave='duration-100 ease-in'
                      leaveFrom='opacity-100 scale-100'
                      leaveTo='opacity-0 scale-95'
                    >
                      <Popover.Panel
                        className={twMerge(
                          'absolute top-2 z-[11] flex w-40 flex-col space-y-2.5 rounded px-4 py-4 shadow',
                          'dark:border dark:border-neutral-800 bg-white dark:bg-neutral-900',
                        )}
                      >
                        <CustomActiveLink href='/#'>Studios</CustomActiveLink>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
          {/* End Nav Link  */}

          <div className='hidden items-center gap-2 sm:flex'>
            <div className='flex flex-wrap items-center gap-x-3 gap-y-3'>
              <ThemeChanger simple />
              <GithubIcon />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='flex sm:hidden'>
            <Popover.Button
              className={twMerge(
                'inline-flex items-center justify-center rounded transition-all',
                'text-neutral-500 hover:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-100',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
              )}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          {/* End Mobile menu button */}
        </nav>
      </div>

      {/* Mobile menu panel */}
      <Transition
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 -top-12 z-10 origin-top-right transform p-3 transition md:hidden'
        >
          <div className='overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-[#1a1a1a]'>
            <div className='flex items-center justify-between border-b py-3 dark:border-b-neutral-800'>
              <div className='ml-5'>
                <Link
                  href='/'
                  passHref
                  className='flex w-full items-center rounded focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                >
                  <span className='text-xl font-semibold dark:text-white'>Next</span>
                </Link>
              </div>
              {/* CLose Mobile Menu Button  */}
              <div className='mr-3 flex items-center gap-2'>
                <ThemeChanger simple />
                <GithubIcon />
                <Popover.Button
                  className={twMerge(
                    'p-1 text-neutral-700 transition-all dark:text-neutral-300',
                    'rounded-md border hover:border-neutral-300 dark:border-neutral-700 dark:hover:border-neutral-600',
                    'hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
                    'focus:outline-none focus:ring-2 focus:ring-sky-500',
                  )}
                >
                  <span className='sr-only'>Close main menu</span>
                  <XMarkIcon className='h-5 w-5' aria-hidden='true' />
                </Popover.Button>
              </div>
              {/* EndCLose Mobile Menu Button  */}
            </div>
            <div className='my-4 flex flex-col space-y-1 px-4'>
              <ActiveLink href='/' activeClassName='!text-sky-500 dark:text-sky-500' className={activeCn}>
                Home
              </ActiveLink>
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button
                      className={twMerge(
                        'w-full rounded px-3 py-1.5 text-[15px] font-medium',
                        'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
                      )}
                    >
                      <div className='flex items-center justify-between'>
                        <span>More</span>
                        <ChevronRightIcon
                          className={`${
                            open
                              ? 'rotate-90 transform transition-transform duration-200'
                              : 'transition-transform duration-200'
                          } h-5 w-5`}
                        />
                      </div>
                    </Menu.Button>
                    <Menu.Items className='space-y-1 px-3 focus-visible:outline-none focus-visible:ring-0'>
                      <Menu.Item>
                        {({ active }) => (
                          <ActiveLink
                            activeClassName='!text-sky-500 dark:text-sky-500'
                            href='/#'
                            className={twMerge(activeCn, active && 'bg-neutral-100 dark:bg-neutral-800')}
                          >
                            Studios
                          </ActiveLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      {/* End Mobile menu panel */}
    </Popover>
  );
}
