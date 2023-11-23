import { Box, Button, styled } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import { Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme';

const FlexBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const JustifyBox = styled(FlexBox)(() => ({
  maxWidth: 400,
  flexDirection: 'column',
  justifyContent: 'center',
}));

const IMG = styled('img')(() => ({
  width: '100%',
  marginBottom: '32px',
}));

const NotFoundRoot = styled(FlexBox)(() => ({
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh !important',
}));

const NotFound = () => {
  const navigate = useNavigate ();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <NotFoundRoot>
      <JustifyBox>
        <IMG src={`../../assets/404.svg`} alt="" />

        <Box marginBottom="15px">
        <Typography variant='h5'
            color={colors.greenAccent[400]}
            sx={{justifyContent:"center", }}
            >You are unauthorized, pls contact the Adminstrator.</Typography>
        </Box>

        <Button
          color="primary"
          variant="contained"
          sx={{ textTransform: 'capitalize' }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </JustifyBox>
    </NotFoundRoot>
  );
};

export default NotFound;
