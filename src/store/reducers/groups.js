const initialState = [
    { id: 1, subject: 'Happy Hour', repository: 'https://github.com/Gozkazu/HappyHourReact' },
    { id: 2, subject: 'Site de rencontre par film', repository: 'https://github.com/vincedel/react-app' },
    { id: 3, subject: 'Slack-like app', repository: 'https://github.com/abdelkirat/mini-slack' },
    { id: 4, subject: 'Pokedex', repository: 'https://github.com/AlexisLambois/efficom-react' }
];

const groups = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default groups;
