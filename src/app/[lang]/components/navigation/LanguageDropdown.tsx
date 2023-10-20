"use client"

import { Fragment } from 'react';
import {Menu,Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import { usePathname} from 'next/navigation'

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function LanguageDropDown(): JSX.Element {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  
 


  return (
    <Menu as="div" className="relative inline-block text-left w-[120px]  ">
      <div>
        <Menu.Button className="flex  border border-gray-200  justify-between items-center w-full gap-x-2 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
          {/* <img
            src="/img/flag_en.png " alt="English" loading='lazy'
            
          /> */}
          <span className='flag-icon flag-icon-gb'></span>
          <span>Language</span>
          <ChevronDownIcon className="mr-1 h-5 w-10 text-gray-400 hide" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute flex-col right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 ring-black  focus:outline-none">
          <div className="py-1 flex-col items-center">
            <Menu.Item >
              {({ active }) => (
                <Link
                href={redirectedPathName('en')}
                  data-url_code="en"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    ' px-4 py-2 text-sm flex items-center gap-2'
                  )}
                >
                  <img src="/img/flag_en.png" alt="English" />
                  <span>English</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={redirectedPathName('fr')}
                  data-url_code="fr"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm flex items-center gap-2'
                  )}
                >
                  <img src="/img/flag_fr.png" alt="Français"  />
                  <span>Français</span>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={redirectedPathName('tl')}
                  data-url_code="tl"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    ' px-4 py-2 text-sm flex items-center gap-2'
                  )}
                >
                  <img
                    src="/img/flag_tl.png" alt="Filipino" />
                  <span>Filipino</span>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
