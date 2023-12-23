import { useState } from 'react';
import { Scanner } from './components/Scanner';
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export const App = () => {
  const [codes, setCodes] = useState<string[]>([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Container>
      {matches ? (
        <Box display={'flex'} gap={2}>
          <Box flex={1}>
            <Scanner
              onReadCode={(result) =>
                setCodes((codes) =>
                  Array.from(new Set([...codes, result.getText()]))
                )
              }
            />
          </Box>
          <Stack width={300} spacing={2}>
            <TextField fullWidth multiline rows={10} value={codes.join('\n')} />
            <Button variant={'contained'} fullWidth>
              コピー
            </Button>
          </Stack>
        </Box>
      ) : (
        <Stack spacing={2}>
          <Scanner
            onReadCode={(result) =>
              setCodes((codes) =>
                Array.from(new Set([...codes, result.getText()]))
              )
            }
          />
          <TextField fullWidth multiline rows={5} value={codes.join('\n')} />
          <Button variant={'contained'} fullWidth>
            コピー
          </Button>
        </Stack>
      )}
    </Container>
  );
};
