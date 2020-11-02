import React from 'react';
import { AboutHeader } from "./AboutHeader";
import { AboutSummary } from './AboutSummary';
import { AboutEducation } from './AboutEducation';

export const About = () => {
    return (<>
        <AboutHeader />
        <AboutSummary />
        <AboutEducation />
    </>);
}