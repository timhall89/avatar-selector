import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './Popover.css'

interface PopoverProps {
  show: boolean;
  children: React.ReactNode;
}

const Popover = ({ show, children }: PopoverProps) => {
  // ref used to stop hide css animation from showing when first loaded.
  const firstRenderRef = useRef(true);
  const firstRender = firstRenderRef.current;
  if (firstRender) firstRenderRef.current = false;
  return (
    <div className={`avatar-selector-popover ${firstRender ? '' : (show ? 'show' : 'hide')}`}>
      <div className="triangle" />
      <div className="popover-inner">
        {children}
      </div>
    </div>
  )
};

Popover.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Popover;
