"use client";
import React from "react";
import { Button } from "@/components/ui/button"; // Using shadcn button
import { cn } from "@/lib/utils"; // Utility for class merging
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import Image from "next/image";

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const MeetingSetup: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-white">
      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-between space-y-8 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black">
        <span className={`${caveat.className}`}>Set up the Meeting</span>
        </h1>

        {/* Image Section */}
        <div className="relative w-11/12 md:w-[90%] h-[60vh] bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="https://source.unsplash.com/800x600/?conference,technology"
            alt="Meeting Setup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Start Button */}
        <Button
          className={cn(
            "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg shadow-md transition duration-200"
          )}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default MeetingSetup;
