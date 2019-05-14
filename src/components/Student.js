import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../store/actions';

class Student extends Component
{
    render () {
        const { student, actions } = this.props;
        const { name, rating } = student;
        const { incrementRating, decrementRating } = actions;

        return (
            <div className="row">
                <div className="col-5 align-self-center text-left">
                    {name}
                </div>
                <div className="col-3 align-self-center">
                    <span className="badge badge-primary badge-pill">rating: {rating}</span>
                </div>
                <div className="col-4 btn-group text-right">
                    <button className="btn btn-small btn-outline-primary" onClick={() => incrementRating(student)}>
                        +
                    </button>
                    <button className="btn btn-small btn-outline-secondary" onClick={() => decrementRating(student)}>
                        -
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(appActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Student);
