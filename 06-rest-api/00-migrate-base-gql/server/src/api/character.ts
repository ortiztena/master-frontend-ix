import { Router } from 'express';
import {
  Character,
  getCharacter,
  getCharacterList,
  insertComment
} from '../db';

export const characterApi = Router();

characterApi
  .get('/', async (req, res) => {
    const characters = await getCharacterList();
    res.send(characters);
  })

  .get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const character = await getCharacter(id);
    res.send(character);
  })

  .patch('/:id', async (req, res) => {
    const characterEdit: Character = req.body;
    await insertComment(characterEdit.id, characterEdit.comment);
    res.sendStatus(200);
  });
