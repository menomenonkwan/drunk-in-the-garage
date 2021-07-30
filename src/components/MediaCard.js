import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { GatsbyImage, getImage  } from 'gatsby-plugin-image';
// COMPONENTS
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    flexDirection: 'column',
    background: 'var(--blue)',
    boxShadow: "inset -5px 5px 200px 5px rgba(0,0,0,0.5)",
  },
  media: {
    height: 95,
    width: 120,
    background: 'var(--blue)',
    borderRadius: '1rem',
    boxShadow: '0px 2px 10px 5px rgba(0, 0, 0, 0.35)',
    transform: 'rotateX(15deg) rotateY(15deg) translateY(1rem)',
    margin: 'auto',
  },
  content: {
    flexDirection: 'column',
    background: 'var(--white, white)',
    boxShadow: "inset -5px 5px 50px 5px rgba(0,0,0,0.25)",
  },
  title: {
    marginRight: 'auto',
    fontSize: '2.75rem',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  text: {
    marginRight: 'auto',
    fontSize: '1.5rem',
    fontFamily: 'Lato',
  },
  action: {
    background: 'rgba(0, 0, 0, 0.15)',
    width: '100%',
  },
  btn: {
    fontSize: '1.15rem',
    width: '100%',
    fontFamily: 'Lato',
    color: 'var(--blue)',
    fontWeight: 'bold'
  }
});

export default function MediaCard({ media }) {
  const classes = useStyles();
  const image = getImage(media.node.frontmatter.thumb)

  return (
    <Card className={classes.root} elevation={8}>
      <CardActionArea>
        <GatsbyImage image={image} alt="" className={classes.media}/>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h2" component="h2" className={classes.title}>
            {media.node.frontmatter.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p" className={classes.text}>
          {media.node.frontmatter.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <Link to={media.node.frontmatter.slug}>
        <Button size="small" color="primary" className={classes.btn}>
          See More
        </Button></Link>
      </CardActions>
    </Card>
  );
}