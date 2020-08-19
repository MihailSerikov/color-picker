import React, { useState } from 'react';
import styles from './Dropdown.module.scss';
import cx from 'classnames';

interface DropdownProps {
  trigger: JSX.Element;
  children: JSX.Element;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);

  return (
    <div className={styles.container}>
      <button className={styles.dropdownTrigger} onClick={toggleDropdown}>
        {trigger}
      </button>
      {open && (
        <div
          className={cx(styles.dropdownContent, {
            [styles.open]: open,
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
};
