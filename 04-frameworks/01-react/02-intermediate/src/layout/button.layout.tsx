import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons">
        Search
      </Button>
    </Stack>
  );
}

//llamar a filtro en href
