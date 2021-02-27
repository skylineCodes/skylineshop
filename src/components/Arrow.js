import React from 'react'
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';

const Arrow = ({ direction, clickFunction, className }) => {
    const classes = useStyles();

    const icon =
      direction === 'left' ? (
        <div>
          <ChevronLeftOutlined />
        </div>
      ) : (
        <div>
          <ChevronRightOutlined />
        </div>
      );

    return (
      <div className={className} onClick={clickFunction}>
        {icon}
      </div>
    );
}

export default Arrow
