'use client';

import Link from 'next/link';
// FIX: Import the new component names directly
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import { Fragment } from 'react';

// Define your navigation structure here (this part doesn't change)
const navigation = [
  {
    name: 'Offerings',
    options: [
      { name: 'Cloud Services', href: '/offerings/cloud-services' },
      { name: 'AI & Machine Learning', href: '/offerings/ai-ml' },
      { name: 'Digital Transformation', href: '/offerings/digital-transformation' },
    ],
  },
  {
    name: 'Platforms',
    options: [
        { name: 'E-commerce Platform', href: '/platforms/ecommerce' },
        { name: 'Data Analytics Platform', href: '/platforms/analytics' },
    ],
  },
  {
    name: 'Staffing',
    options: [
        { name: 'IT Staff Augmentation', href: '/staffing/it-augmentation' },
        { name: 'Contract to Hire', href: '/staffing/contract-to-hire' },
    ],
  },
  {
    name: 'Careers',
    options: [
        { name: 'Current Openings', href: '/careers/openings' },
        { name: 'Life at InfoNext', href: '/careers/life' },
    ],
  },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-20 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold rounded-md px-3 py-2 text-blue-600 transition-transform ease-in-out transform duration-500  hover:scale-105 inline-block">
          {/* FIX: Use Link for navigation */}
          <Link href="/">ABC Research</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) =>
            item.options ? (
              // FIX: Use the new <Menu> component structure
              <Menu as="div" className="relative text-left" key={item.name}>
                <MenuButton className="inline-flex w-full justify-center items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:outline-none">
                  {item.name}
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </MenuButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems  className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      {item.options.map((option) => (
                        // FIX: Use <MenuItem> which renders a Link
                        <MenuItem key={option.name}>
                          <Link
                            href={option.href}
                            // FIX: Use data-attributes for styling active state
                            className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 data-[active]:text-blue-600"
                          >
                            {option.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-700"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
        <button className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
}
