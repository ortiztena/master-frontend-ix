import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { CharacterVm } from './character.vm';
import * as classes from './character.styles';
import { saveComment } from './api';

interface Props {
  character: CharacterVm;
  // onSave: (character: CharacterVm) => void;
  // onSubmit: (character: CharacterVm) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <h1>Nombre: {character.name}</h1>
      <ul>
        <li>Status: {character.status}</li>
        <li>Species: {character.species}</li>
        <li>comment: {character.comment}</li>
      </ul>
      <Formik
        onSubmit={(e) => saveComment(e.id, e.comment)}
        initialValues={character}
        enableReinitialize={true}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent name="comment" label="Comment" />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
