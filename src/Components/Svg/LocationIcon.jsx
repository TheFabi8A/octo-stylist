import React from "react";

const LocationIcon = React.forwardRef((props, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 20"
    >
      <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 0 0-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 0 0-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 0 0-.092-6.88Zm-5.92 5.638A2.816 2.816 0 0 1 4.064 6.25a2.815 2.815 0 0 1 2.812-2.812A2.816 2.816 0 0 1 9.69 6.25a2.816 2.816 0 0 1-2.813 2.813Z" />
    </svg>
  );
});

LocationIcon.displayName = "LocationIcon";
export default LocationIcon;
