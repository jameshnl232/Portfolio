import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  id?: string;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, id , children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("px-4 pt-10 md:px-6 md:pt-14 lg:pt-16 ", className)}
        {...restProps}
        id={id}
      >
        <div className=" mx-auto w-full max-w-7xl">{children}</div>
      </Comp>
    );
  },
);

// Set a display name for the component
Bounded.displayName = "Bounded";

export default Bounded;
