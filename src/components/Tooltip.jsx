import { cloneElement, useId } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Tooltip = ({ text, position = 'top', children }) => {
  const { theme } = useTheme();
  const id = useId();

  const placement = position === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2';
  const colors =
    theme === 'dark'
      ? 'bg-gray-700 text-white border-gray-600'
      : 'bg-gray-900 text-white border-gray-200/20';

  return (
    <span className="relative group/tooltip inline-flex">
      {cloneElement(children, { 'aria-describedby': id })}
      <span
        id={id}
        role="tooltip"
        className={`absolute ${placement} left-1/2 -translate-x-1/2 z-50 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg border ${colors} pointer-events-none opacity-0 transition-opacity duration-300 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100`}
      >
        {text}
      </span>
    </span>
  );
};
