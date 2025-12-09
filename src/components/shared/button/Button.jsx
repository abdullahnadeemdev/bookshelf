const Button = ({ children, variant, className, ...props }) => {
  return (
    <button
      {...props}
      className={`rounded-2xl font-semibold  duration-500 ease-out cursor-pointer text-black
           w-fit hover:scale-105 px-3 py-2 text-xs xs:px-4 xs:py-2.5 xs:text-sm lg:px-[19px] sm:py-3 lg:text-lg ${
             variant === "outline"
               ? " text-yellow border shadow-none border-grey "
               : "text-grayBg bg-yellow "
           } ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
