import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import useMacaque from '../hooks/useMacaque';
import Macaque from '../components/macaque';

import { Monkey } from '../types/monkey';

const useStyles = makeStyles({
  root: {
    flexDirection: 'row',
  },
});

type MacaquesProps = {
    img: string;
};

const Macaques = (props: MacaquesProps): JSX.Element => {
    const classes = useStyles();
    const { getMacaque } = useMacaque();
    const [macaques, setMacaques] = useState([]);

    useEffect(() => {
        getMacaque().then((res) => setMacaques(res));
    }, []);

    return (
        <Container>
            <Box display="flex" flexDirection="row" m={1} className={classes.root}>
              {
                  macaques.map((macaque: Monkey) => <Macaque {...macaque} {...props} key={macaque.id}/>)
              }
            </Box>
        </Container>
    );
};

export default Macaques;
