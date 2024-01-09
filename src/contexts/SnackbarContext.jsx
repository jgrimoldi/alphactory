import styled from '@emotion/styled';

import { MaterialDesignContent, SnackbarProvider, enqueueSnackbar } from 'notistack';

export const showSnackbar = (message, variant) => enqueueSnackbar(message, { variant });

export function SnackbarContext ({ children }) {
  const StyleNotistack = styled(MaterialDesignContent)(() => ({
    '&.notistack-MuiContent-success': {
      fontFamily: 'Poppins',
      backgroundColor: '#30C16E',
      color: '#F2F2F2',
      fontSize: '0.875rem',
      fontWeight: 300
    },
    '&.notistack-MuiContent-error': {
      fontFamily: 'Poppins',
      backgroundColor: '#E23700',
      color: '#F2F2F2',
      fontSize: '0.875rem',
      fontWeight: 300
    },
    '&.notistack-MuiContent-warning': {
      fontFamily: 'Poppins',
      backgroundColor: '#E2D900',
      color: '#777777',
      fontSize: '0.875rem',
      fontWeight: 300
    },
    '&.notistack-MuiContent-info': {
      fontFamily: 'Poppins',
      backgroundColor: '#FA5621',
      color: '#F2F2F2',
      fontSize: '0.875rem',
      fontWeight: 300
    }
  }));

  const notiStyle = {
    success: StyleNotistack,
    error: StyleNotistack,
    warning: StyleNotistack,
    info: StyleNotistack
  };

  return (
    <SnackbarProvider maxSnack={3} Components={notiStyle} preventDuplicate>
      {children}
    </SnackbarProvider>
  );
}
