import React from 'react';
import HomePage from '../components/home/HomePage';
import TrackPanel from '../components/trackPanel/TrackPanel';

export const Home = (props : any) => {
  return (
         <div>
           <HomePage />
           <TrackPanel />
         </div>

  );
}
