import React from "react";
import Group from "../components/Group";
import {connect} from "react-redux";

const HomePage = ({ groups }) => {
    return (
        <div className="row">
            {!groups && <div>No data</div>}
            {groups && groups.map(group => (
                <div className="col-6" key={group.subject}>
                    <Group group={group} />
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
   groups: state.groups
});

export default connect(mapStateToProps)(HomePage);
