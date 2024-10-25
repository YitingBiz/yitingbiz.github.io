export const pushEvent = ({
    event,
    category,
    action,
    label,
    value,
    ...rest
  }) => {
    if (typeof window !== 'undefined') {
      // Initialize dataLayer if it doesn't exist
      window.dataLayer = window.dataLayer || [];
      
      // Create the event object
      const eventObject = {
        event,
        category,
        action,
        label,
        value,
        ...rest
      };
  
      // Debug log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('GTM Event:', eventObject);
      }
  
      // Push to dataLayer
      try {
        window.dataLayer.push(eventObject);
        
        if (process.env.NODE_ENV === 'development') {
          console.log('GTM Event pushed successfully');
        }
      } catch (error) {
        console.error('Error pushing to dataLayer:', error);
      }
    }
  };