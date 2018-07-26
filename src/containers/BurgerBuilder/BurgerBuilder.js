import React, { Component } from 'react'
import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            cheese: 2,
            salad: 1,
            bacon: 2,
            meat: 1
        }
    }

    render () {
        return(
            <Auxx>
                <Burger ingredients = { this.state.ingredients }/>
                <div>Build Controls</div>
            </Auxx>
        );
    };
}

export default BurgerBuilder;