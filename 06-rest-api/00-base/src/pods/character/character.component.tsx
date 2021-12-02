import React from 'react';
// import { Formik, Form } from 'formik';
// import { TextFieldComponent } from 'common/components';
// import { Button, Card } from '@material-ui/core';
import { CharacterVm } from './character.vm';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import * as classes from './character.styles';

interface Props {
  character: CharacterVm;
  // onSave: (character: CharacterVm) => void;
  // onSubmit: (character: CharacterVm) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  // const { character, onSave } = props;

  const { character } = props;

  return (
    <>
      <h1>Nombre:</h1>
      <ul>
        <li>Status: </li>
        <li>Species: </li>
        <li>comment: </li>
      </ul>
    </>
  );
};

// <>
//   <Card className={classes.card}>
//     <CardActionArea>
//       <CardMedia
//         className={classes.media}
//         image={character.image}
//         title={character.name}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           Lizards are a widespread group of squamate reptiles, with over
//           6,000 species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//   </Card>

// </>
//  <Formik
//     onSubmit={function () {
//       return;
//     }}
//     initialValues={character}
//     enableReinitialize={true}
//   >
//     {() => (
//       <Form className={classes.root}>
//         <TextFieldComponent name="comment" label="Comment" />
//         <Button type="submit" variant="contained" color="primary">
//           Save
//         </Button>
//       </Form>
//     )}
//   </Formik>
