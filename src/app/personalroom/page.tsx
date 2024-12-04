
"use client";
import React, { useState } from "react";
import { Button} from "@/components/ui/button"; // shadcn Card components
import Sidebar from "@/components/main/sidebar";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import { Skeleton } from "@/components/ui/skeleton";

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const PreviousPageLayout: React.FC = () => {
  const [recentItems, setRecentItems] = useState(["Item 1", "Item 2"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [upcomingBoxes, setUpcomingBoxes] = useState<string[]>([]);

  // Function to add a new upcoming box
  const addUpcomingBox = () => {
    setUpcomingBoxes((prevBoxes) => [...prevBoxes, `Box ${prevBoxes.length + 1}`]);
  };
  // Function to add a new recent item
  const addRecentItem = () => {
    setRecentItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
        <Sidebar />


      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 sm:ml-64">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6 ml-4">
          <h1 className="text-4xl font-bold sm:ml-1 ml-16">
            <span className={`${caveat.className}`}>
              <span className="text-blue-700">ConnectO</span>
            </span>
          </h1>
          {/* Dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      href="#"
                      className="block flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <LogOut className="mr-2" size={16} />
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Sections */}
        <div className="grid gap-4 mb-6">
        <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm w-[70vh]">
        <h2 className="text-lg font-semibold">Section 1</h2>
        <div className="space-y-2">
            <Skeleton className="h-4 w-[300px] bg-blue-50" />
            <Skeleton className="h-4 w-[300px] bg-blue-50" />
        </div>
        </div>
        <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm w-[70vh]">
        <h2 className="text-lg font-semibold">Section 2</h2>
        <div className="space-y-2">
            <Skeleton className="h-4 w-[300px] bg-blue-50" />
            <Skeleton className="h-4 w-[300px] bg-blue-50" />
        </div>
        </div>
        <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm w-[70vh]">
        <h2 className="text-lg font-semibold">Section 3</h2>
        <div className="space-y-2">
            <Skeleton className="h-4 w-[300px] bg-blue-50" />
            <Skeleton className="h-4 w-[300px] bg-blue-50" />
        </div>
        </div>
        </div>

        {/* Bottom-right buttons */}
        <div className="absolute bottom-16 right-10 flex space-x-4">
        <Button variant={"outline"} className="bg-blue-600 border border-blue-700 text-white px-10 py-2">
            Save
        </Button>
        <Button variant={"destructive"} className="px-10 py-2">
            Cancel
        </Button>
        </div>
      </div>
    </div>
  );
};

export default PreviousPageLayout;
