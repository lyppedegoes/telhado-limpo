'use client';

import React, { useEffect } from 'react';

const InstaFeed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-87c6db26-663b-4ff4-ab26-5a89df260655" data-elfsight-app-lazy></div>
  );
};

export default InstaFeed;
