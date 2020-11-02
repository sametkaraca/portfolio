import React from 'react';
import { AboutHeader } from "./AboutHeader";
import { AboutSummary } from './AboutSummary';
import { AboutEducation } from './AboutEducation';
import { AboutHobbies } from './AboutHobbies';
import { AboutTravel } from './AboutTravel';

export const About = () => {
    return (<>
        <AboutHeader />
        <AboutSummary />
        <AboutEducation />
        <AboutHobbies />
        <AboutTravel />
    </>);
}