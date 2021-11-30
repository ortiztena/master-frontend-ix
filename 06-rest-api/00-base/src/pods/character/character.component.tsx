import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent, SelectComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { CharacterVm } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: CharacterVm;
  onSave: (character: CharacterVm) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
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
  );
};
