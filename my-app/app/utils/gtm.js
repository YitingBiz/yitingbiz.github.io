export const pushEvent = ({
    event,
    category,
    action,
    label,
    value,
    ...rest
  }) => {
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event,
        category,
        action,
        label,
        value,
        ...rest
      });
    }
  };