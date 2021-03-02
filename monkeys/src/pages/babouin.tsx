import React from 'react';
import { Container, Box } from '@material-ui/core';

export default class Babouin extends React.Component {
  state = {
      babouin: 0,
  };
  componentDidMount() {
      this.setState({ babouin: 0 });
  }
  componentDidUpdate() {
      this.setState({ babouin: this.state.babouin + 1 });
  }
  render() {
    return (
        <Container maxWidth="sm">
            <Box m={1}>
            Les Babouins (Papio) forment un genre de singes cynocéphales de la famille des
            cercopithécidés répandus en Afrique subsaharienne et au sud de la péninsule Arabique.
            </Box>
            <Box m={1}>
                Vous avez visitez les babouins x{this.state.babouin}
            </Box>
        </Container>
    );
  }
};
