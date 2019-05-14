import React from 'react';

class Ampoule extends React.Component
{
    state = {
        allume: false
    };

    allumer = () => {
        this.setState({ allume: true });
    };

    eteindre = () => {
        this.setState({ allume: false });
    };

    render () {
        const { color } = this.props;
        const { allume } = this.state;

        return (
            <div style={{ background: allume ? color : 'black' }}>
                Je suis une ampoule:
                Suis-je allumée: { allume ? 'yes' : 'non' }
                De quelle couleur: { color }
                <button onClick={this.allumer}>
                    allumer
                </button>
                <button onClick={this.eteindre}>
                    eteindre
                </button>
            </div>
        )
    }
}

export default Ampoule;
