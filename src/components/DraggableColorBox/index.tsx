import { WithStyles, withStyles } from '@material-ui/core';
import React, { ComponentType } from 'react';

import styles from './styles';

type DraggableColorBoxProps = {
    color: string;
};

const DraggableColorBox = (
    props: DraggableColorBoxProps & WithStyles<typeof styles>
): JSX.Element => (
    <div className={props.classes.root} style={{ backgroundColor: props.color }}>
        {props.color}
    </div>
);

export default withStyles(styles)(DraggableColorBox) as ComponentType<
    DraggableColorBoxProps
>;
