import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from '../BuildControls/BuildControls.css';

const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Meat', type: 'meat'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton} disabled={props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;