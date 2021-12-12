import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { CharacterVm } from './character.vm';
import * as classes from './character.styles';
import { saveComment } from './api';

interface Props {
  character: CharacterVm;
  // onChange: (comment: string) => void;
  // onSubmit: (character: CharacterVm) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const [comment, setComment] = React.useState<string>(character.comment);
  // const loadComment = () => {

  // }

  return (
    <>
      <h1>Nombre: {character.name}</h1>
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>
          Comment: {character.comment}
          {comment}
        </li>
      </ul>
      <Formik
        onSubmit={(e) => saveComment(e.id, comment)}
        initialValues={character}
        enableReinitialize={true}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent
              value={comment}
              name="comment"
              label="Comment"
              onChange={(e) => setComment(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
