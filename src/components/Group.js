import React from 'react';
import {connect} from "react-redux";
import Student from './Student';

const Group = ({ students, group }) => {
    return (
        <div className="card" style={{ boxShadow: "1px 1px 10px 0px #80808070", marginBottom: "24px" }}>
            <div className="card-body">
                <h5 className="card-title">Group {group.id}: {group.subject}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{group.repository}</h6>
                {students &&
                    <ul className="list-group">
                        {students.map(student => (
                            <li className="list-group-item" key={`${group.name}-${student.name}`}>
                                <Student student={student} />
                            </li>
                        ))}
                    </ul>
                }
            </div>

        </div>
    );
};

const mapStateToProps = (state, props) => ({
    students: state.students.filter(student => student.group === props.group.id)
});

export default connect(mapStateToProps)(Group);
