'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const BreakingNewsTicker = dynamic(
  () => import('./BreakingNewsTicker').then(mod => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="bg-red-600 text-white py-2 px-4 text-sm font-medium">
        <div className="container mx-auto flex items-center">
          <span className="mr-3 font-bold">BREAKING:</span>
          <div className="animate-pulse">Loading news...</div>
        </div>
      </div>
    )
  }
);

export default function BreakingNewsWrapper() {
  return <BreakingNewsTicker />;
}