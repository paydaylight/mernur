import { useEffect } from 'react';

const useDGWidgetLoader = params => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.body = params;
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    });
};
  
export default useDGWidgetLoader;