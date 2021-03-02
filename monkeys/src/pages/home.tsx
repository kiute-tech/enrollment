import React, { ReactNode } from 'react';
import { size } from '../hooks/useHome';

interface theState {
    error: any,
    isLoaded: boolean,
    monkeys: any,
    nbItems: number,
    currentPage: number,
}
interface theProps {}

class Home extends React.Component<theProps, theState> {

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            monkeys: [],
            nbItems: 0,
            currentPage: 0,
        } as theState;
    }
    
    fetchMonkeys = () => {
        // Our API does not scale well...
        // We have to fetch 3 by 3
        fetch(`http://localhost:3002/monkeys?_start=${this.state.currentPage * 3}&_end=${(this.state.currentPage * 3) + 3}`)
            .then(res => res.json())
            .then(x => {
                this.setState({ monkeys: x, isLoaded: true });
        });
        fetch(`http://localhost:3002/monkeys?_start=${(this.state.currentPage * 3) + 3}&_end=${(this.state.currentPage*3) + 6}`)
            .then(res => res.json())
            .then(z => {
                this.setState({ monkeys: [...this.state.monkeys, ...z], isLoaded: true });
        });
    };

    componentDidUpdate(prevProps: theProps, prevState: { currentPage: number; }) {
      if (prevState.currentPage !== this.state.currentPage) {
        this.fetchMonkeys();
      }
    }

    componentWillMount () {
        this.fetchMonkeys();
        size()
          .then(nb => this.setState({ nbItems: nb }));
    }

    linkPage = (thePage: number): ReactNode => {
      return <span onClick={() => {
        this.setState({ currentPage: thePage });
      }} style={{ color: 'blue', cursor: 'pointer' }}>{thePage}</span>
    }

    // show first 6 monkeys
    render() {
        if (this.state.error) {
            return <div>Error : {this.state.error.message}</div>;
          } else if (!this.state.isLoaded) {
            return <div>loading…</div>;
          } else {
            return (
              <div>
              <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {this.state.monkeys.filter((x: any) => x.id && x.name && x.img).map((monkey: any) => (
                  <p key={monkey.name}>
                      <div style={{ width: '400px', float: 'left' }}>
                        <strong>{monkey.name} / {monkey.species}</strong>
                        <img style={{ width: '400px' }} src={monkey.img} />
                        <i>{monkey.comment}</i>
                      </div>
                  </p>
                ))}
              </div>
                 <div>
                    { 
                    this.state.nbItems > 6 ? new Array(Math.ceil(this.state.nbItems / 6))
                      .fill('page')  
                      .map((x, i) => <span key={i}>{i != this.state.currentPage ? this.linkPage(i) : i } / </span>) : null
                  }
                </div>
            </div>
            );
        }
    }
}


export default Home;
