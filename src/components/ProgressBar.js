import React, { useEffect } from 'react';
import useStorage from './hook';
import { Box, Typography, CircularProgress } from '@material-ui/core';

export default function ProgressBar({file, setFile}) {

  const { url, progress } = useStorage(file);

  useEffect(() => {
    console.log(url);
    if(url) {
      setFile({
        name: ''
      });
    }
  }, [file, url, setFile]);

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" value={progress} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(progress)}%`}</Typography>
      </Box>
    </Box>
  );
} 