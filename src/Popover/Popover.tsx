import React from 'react';
import PropTypes from 'prop-types';
import './Popover.css'

interface PopoverProps {
  show: boolean;
  children: React.ReactNode;
}

const Popover = ({ show, children }: PopoverProps) => (
  <div className={`avatar-selector-popover ${show ? 'show' : ''}`}>
    <div className="triangle" />
    <div className="popover-inner">
      {children}
    </div>
  </div>
)

Popover.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Popover;
