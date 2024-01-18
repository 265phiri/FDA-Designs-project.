import React from 'react';
import { Footer } from '../components/Footer';
import AnimatedPage from '../components/AnimatedPage';
import { Navigation } from '../components/Navigation';
import { Projectcomponent } from '../components/Projectcomponent';



export const Allprojects = () => {


    return (
        <div>
            <div>
                <AnimatedPage>
                <div className="fixed z-40 top-0">
                    <Navigation/>
                </div>

                <div className="mt-32 text-center"><p className="font-urbanist font-bold text-mostlyblack text-3xl">All Projects</p>
                </div>
                    <Projectcomponent/>
                <Footer/>
                </AnimatedPage>
            </div>
        </div>
    )
    }