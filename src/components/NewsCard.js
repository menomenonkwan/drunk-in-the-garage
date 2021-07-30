import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableText from "react-portable-text";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { MdExpandMore } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'flex-start',
    width: '40%',
    minWidth: 350,
    fontFamily: "Lato",
  },
  header: {
    background: 'var(--white, white)',
    boxShadow: 'inset -5px 5px 20px 5px rgba(0,0,0,0.25)',
  },
  media: {
    height: 0,
    maxHeight: 50,
    paddingTop: '25%',
    backgroundColor: 'red',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  action: {
    background: 'var(--white, white)',
    boxShadow: 'inset -5px 5px 100px 5px rgba(0,0,0,0.25)',
    color: 'var(--white, white)',
  },
  article: {
    fontWeight: 'lighter',
    fontSize: '2rem',
    padding: '1.5rem 2rem',
  },
  btn: {
    color: 'var(--black, black)',
    fontSize: '1.75rem',
    fontFamily: 'LivingWell',
    justifyContent: 'flex-start',
    width: '100%',

    "&:hover": {
      color: "var(--red, black)"
    }
  }
}));

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'serif',
    ].join(','),
  },});


function SingleImage({image}) {
  return (
    <div>
      <GatsbyImage image={ image.asset.gatsbyImageData } alt="" fullWidth />
    </div>
  )
}  


export default function NewsCard({ article }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { name, news, image } = article;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  news.map((i) => {
    i.markDefs = [];
    return i;
  });


  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root} elevation={8}>
        <CardHeader
          className={classes.header}
          titleTypographyProps={{ variant:'h4' }}
          title={ name }   
          subheader={article.date} 
        />

        <SingleImage image={image} />

        <CardActions 
          disableSpacing 
          className={classes.action} 
          onClick={handleExpandClick}
        >
          <Button size="large" color="unset" className={classes.btn}>
            Read About It
          </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <MdExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className={classes.article} onClick={handleExpandClick}>
              
              <Typography variant="h4" component="h4">
                { name } 
              </Typography>
              <PortableText content={news} />
            
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  )
}