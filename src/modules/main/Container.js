import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch } from 'react-router-dom';
import game from '../game';


class Container extends Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route exact path="/" component={game.Container} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = () => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);