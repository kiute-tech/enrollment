import react, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import useMacaque from '../hooks/useMacaque';
import { Monkey } from '../types/monkey';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: 3,
  },
  media: {
    height: 240,
  },
});

const Macaque = ({
    name,
    img,
    comment,
    id,
    species,
}: Monkey): JSX.Element => {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {comment}
              </Typography>
            </CardContent>
          </CardActionArea>
      </Card>
    );
};

export default Macaque;
