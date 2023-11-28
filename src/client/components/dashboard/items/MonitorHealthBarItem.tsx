import React from 'react';
import { MonitorHealthBar } from '../../monitor/MonitorHealthBar';

export const MonitorHealthBarItem: React.FC<{
  monitorId: string;
}> = React.memo((props) => {
  return (
    <MonitorHealthBar
      monitorId={props.monitorId}
      count={40}
      size="large"
      showCurrentStatus={true}
    />
  );
});
MonitorHealthBarItem.displayName = 'MonitorHealthBarItem';