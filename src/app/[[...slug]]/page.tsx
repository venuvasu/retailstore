'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import { Amplify } from 'aws-amplify';
import config from '../../../amplifyconfiguration.json';
const App = dynamic(() => import('../../App'), { ssr: false })

Amplify.configure(config);
export default function Page() {
  return <App />
}