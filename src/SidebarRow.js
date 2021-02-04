import { Avatar } from '@material-ui/core';
import React from 'react'
import './SidebarRow.css';

//Note: Icon component is passed in as a prop
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} /> }
      {Icon && <Icon />}  

      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow
