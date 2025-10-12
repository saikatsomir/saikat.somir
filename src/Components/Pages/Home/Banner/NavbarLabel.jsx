const NavbarLabel = ({ label, isHovered, color = 'text-black/90', width }) => {
  return (
    <div
      className={`relative justify-center h-5 lg:h-5 overflow-hidden flex items-center ${
        width || ''
      }`}
    >
      <span
        className={`absolute transition-all duration-300 w-fit ${
          isHovered
            ? '-translate-y-full opacity-0'
            : 'translate-y-0 opacity-100'
        } whitespace-nowrap ${color}`}
      >
        {label}
      </span>
      <span
        className={`absolute transition-all duration-300 w-fit ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        } whitespace-nowrap ${color}`}
      >
        {label}
      </span>
    </div>
  );
};
export default NavbarLabel;
