import {React, useRef } from 'react'
import { Navigation } from '../components/Navigation';
import { ResidentialCategory } from '../components/ResidentialCategory';
import { IndustryCategory } from '../components/IndutstryCategory';
import { CommercialCategory } from '../components/CommercialCategory';
import AnimatedPage from '../components/AnimatedPage';


export const Categories = () => {

    const containerRef = useRef(null);
  
    const handleWheelScroll = (e) => {
      const container = containerRef.current;
      if (container) {
        container.scrollTo({
          left: container.scrollLeft + e.deltaY * 16,
          behavior: 'smooth',
        });
      }
    };

    return (
      <AnimatedPage>
      <div className="">
          <div className="fixed z-40"><Navigation/></div>
            <section
            id="container"
            className="flex overflow-x-auto h-full w-full flex-shrink-0 scroll-smooth"
            ref={containerRef}
            onWheel={handleWheelScroll}
          >
              <div className="h-full w-full">
                <ResidentialCategory />
              </div>
        
              <div className="h-full w-full">
                <IndustryCategory />
              </div>
        
              <div className="h-full w-full">
                <CommercialCategory />
              </div>
            </section>
      </div>
      </AnimatedPage>
  
    );
  }


