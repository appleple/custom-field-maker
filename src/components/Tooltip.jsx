import React from 'react';
import { forwardRef } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import classnames from 'classnames';

const Tooltip = forwardRef(({ className, ...props }, ref) => {
  return <ReactTooltip ref={ref} className={classnames('acms-admin-tooltip acms-tooltip', className)} {...props} />;
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
