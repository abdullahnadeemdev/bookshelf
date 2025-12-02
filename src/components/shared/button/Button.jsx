const Button = ({ children, variant, className, ...props }) => {
  return (
    <button
      {...props}
      className={`rounded-2xl font-semibold  duration-500 ease-out cursor-pointer
           w-fit hover:scale-105 px-3 py-2 text-xs xs:px-4  xs:py-2.5 xs:text-sm lg:px-[19.5px] sm:py-2.5 lg:text-lg ${
             variant === "outline"
               ? "bg-white text-black border shadow-none border-grey hover:border-purple  flex justify-center group hover:text-purple"
               : "text-grayBg bg-yellow "
           } ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
