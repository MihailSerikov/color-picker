import React, { createContext, useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  trigger: JSX.Element;
  children: JSX.Element;
}

export const DropdownContext = createContext<any>({
  value: null,
});

export const Dropdown: React.FC<DropdownProps> = ({ trigger, children }) => {
  const [open, setOpen] = useState(false);
  const dropdownContainer: any = useRef(null);
  const toggleDropdown = (): void => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (e: any): void => {
      if (!dropdownContainer.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);

    return (): void => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownContainer]);

  return (
    <DropdownContext.Provider value={{ setOpen }}>
      <div ref={dropdownContainer} className={styles.container}>
        <div className={styles.dropdownTrigger} onClick={toggleDropdown}>
          {trigger}
        </div>
        {open && <div className={styles.dropdownContent}>{children}</div>}
      </div>
    </DropdownContext.Provider>
  );
};
