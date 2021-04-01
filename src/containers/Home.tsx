import React from 'react';
import HomePage from '../components/home/HomePage';
import ListMenu from '../components/list/ListMenu'

export const Home = (props : any) => {
  return (
         <div>
           <HomePage />
           <ListMenu />
         </div>

  );
}
