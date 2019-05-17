import React from "react";
import Group from "../components/Group";
import { connect } from "react-redux";

class HomePage extends React.Component {
    state = {
        baseRating: 0,
        displayRating: false
    };

    render () {
        const { groups } = this.props;
        const { displayRating, baseRating } = this.state;

        const toggleRatings = () => {
            this.setState({
                baseRating,
                displayRating: !displayRating
            });
        };

        const handleChange = ({ target }) => {
            this.setState({
                displayRating,
                baseRating: target.value
            });
        };

        return (
            <div className="homePage">
                <div className="row mb-4">
                    <div className="col">
                        <h2>Note minimum:</h2>
                        <div className="input-group">
                            <input className="form-control" type="text" onChange={handleChange} />
                            <div className="input-group-append">
                                <button className="btn btn-primary" onClick={toggleRatings}>Toggle Ratings: {displayRating ? 'ON' : 'OFF'}</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    {!groups && <div>No data</div>}
                    {groups && groups.map(group => (
                        <div className="col-6" key={group.subject}>
                            <Group group={group} baseRating={baseRating} displayRating={displayRating} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   groups: state.groups
});

export default connect(mapStateToProps)(HomePage);
