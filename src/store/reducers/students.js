const initialState = [
    { name: "Kris", group: 1, rating: 0 },
    { name: "Adham", group: 1, rating: 0 },
    { name: "Marion", group: 1, rating: 0 },
    { name: "Antoine", group: 1, rating: 0 },
    { name: "Maxime M.", group: 1, rating: 0 },
    { name: "Maxime R.", group: 1, rating: 0 },

    { name: "Vincent", group: 2, rating: 0 },
    { name: "Valentin", group: 2, rating: 0 },
    { name: "Thomas", group: 2, rating: 0 },
    { name: "Camille", group: 2, rating: 0 },
    { name: "Paul", group: 2, rating: 0 },

    { name: "Abdessamad", group: 3, rating: 0 },
    { name: "Winssi", group: 3, rating: 0 },
    { name: "Kevin", group: 3, rating: 0 },
    { name: "Valérie", group: 3, rating: 0 },
    { name: "Amadou", group: 3, rating: 0 },
    { name: "Julien", group: 3, rating: 0 },

    { name: "Aurélien", group: 4, rating: 0 },
    { name: "Alexis", group: 4, rating: 0 },
    { name: "Philippine", group: 4, rating: 0 },
    { name: "Antoine", group: 4, rating: 0 },
    { name: "Julien", group: 4, rating: 0 },
];

const students = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_RATING':
            return state.map((student) => {
                if (student.name === action.payload.name && student.group === action.payload.group) {
                    return {
                        ...student,
                        rating: student.rating + 1
                    }
                }

                return student;
            });

        case 'DECREMENT_RATING':
            return state.map((student) => {
                if (student.name === action.payload.name && student.group === action.payload.group) {
                    return {
                        ...student,
                        rating: student.rating - 1
                    }
                }

                return student;
            });

        default:
            return state;
    }
};

export default students;
