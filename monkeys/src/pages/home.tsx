import React from 'react';

interface theState {
    error: any,
    isLoaded: boolean,
    monkeys: any,
}
interface theProps {}

class Home extends React.Component<theProps, theState> {

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
        } as theState;
    }
    componentWillMount () {
        // Our API does not scale well...
        // We have to fetch 3 by 3
        fetch('http://localhost:3002/monkeys?_start=0&_end=3')
        .then(res => res.json())
        .then(x => {
            this.setState({ monkeys: x, isLoaded: true });
        })
        fetch('http://localhost:3002/monkeys?_start=3&_end=6')
            .then(res => res.json())
            .then(z => {
                this.setState({ monkeys: [...this.state.monkeys, ...z], isLoaded: true });
        });
    }
    render() {
        if (this.state.error) {
            return <div>Error : {this.state.error.message}</div>;
          } else if (!this.state.isLoaded) {
            return <div>loading…</div>;
          } else {
            return (
              <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {this.state.monkeys.map((monkey: any) => (
                  <p key={monkey.name}>
                      <div style={{ width: '400px', float: 'left' }}>
                        <strong>{monkey.name} / {monkey.species}</strong>
                        <img style={{ width: '400px' }} src={monkey.img} />
                        <i>{monkey.comment}</i>
                      </div>
                  </p>
                ))}
              </div>
            );
          }
    }
}


export default Home;
