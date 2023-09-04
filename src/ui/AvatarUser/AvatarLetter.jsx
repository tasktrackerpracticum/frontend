import {Avatar} from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { numberType, stringType } from '../../constatnts/prop-types';

export default function AvatarUser({nameUser, surnameUser, size, fSize}) {


  function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  // const StyledBadgeUnactive = styled(Badge)(({ theme }) => ({
  //   '& .MuiBadge-badge': {
  //     backgroundColor: '#8A8A8A',
  //     color: '#8A8A8A',
  //     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  //     '&::after': {
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       height: '100%',
  //       borderRadius: '50%',
  //       animation: 'ripple 1.2s infinite ease-in-out',
  //       border: '1px solid currentColor',
  //       content: '""',
  //     },
  //   },
  //   '@keyframes ripple': {
  //     '0%': {
  //       transform: 'scale(.8)',
  //       opacity: 1,
  //     },
  //     '100%': {
  //       transform: 'scale(2.4)',
  //       opacity: 0,
  //     },
  //   },
  // }));


  const StyledBadgeActive = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <Stack direction="row" spacing={2}>
            <StyledBadgeActive
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            variant="dot"
           
          >
          <Avatar
            {...stringAvatar(nameUser + ' ' + surnameUser)}
           sx={{
            width: size,
            height: size,
            fontSize: fSize,
           }}
          />
          </StyledBadgeActive>
   

    </Stack>
  )
}

AvatarUser.propTypes = {
  nameUser: stringType,
  surnameUser: stringType,
  size: numberType,
  fSize: numberType
}
