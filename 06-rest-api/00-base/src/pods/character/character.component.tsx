import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button, Card, withWidth } from '@material-ui/core';
import { CharacterVm } from './character.vm';
import * as classes from './character.styles';
import * as api from './api';
import { mapCharacterFromVmToApi } from './character.mappers';
import { useHistory } from 'react-router-dom';

interface Props {
  character: CharacterVm;
  // onChange: (comment: string) => void;
  // onSubmit: (character: CharacterVm) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const [comment, setComment] = React.useState<string>(character.comment);

  const history = useHistory();

  const handleSave = async (character: CharacterVm, comment: string) => {
    const apiCharacter = mapCharacterFromVmToApi(character, comment);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save comment');
    }
  };

  return (
    <>
      <Card className={classes.root}>
        <h1>Nombre: {character.name}</h1>
        <ul>
          <li>Status: {character.status}</li>
          <li>Species: {character.species}</li>
          <li>Gender: {character.gender}</li>
          <img src={character.image} alt={character.name} />
          <li>Comment: {comment}</li>
        </ul>
      </Card>
      <Formik
        onSubmit={(e) => handleSave(character, comment)}
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
