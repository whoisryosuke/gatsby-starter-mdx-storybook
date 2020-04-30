import React from 'react';
import Masthead from "./Masthead"
import GreetingMasthead from "./GreetingMasthead"

export default { title: 'Masthead' };

export const basic = () => (
         <Masthead
           header="All the design systems"
           subheader="and related articles, videos, podcasts, and events"
         />
       )
export const greeting = () => <GreetingMasthead />