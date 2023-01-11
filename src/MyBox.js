import Box from '@mui/material/Box';

const MyBox = (props) => {
  return <Box 
  sx={{
    backgroundColor: "#fffbed",
    boxShadow: 1,
    borderRadius: 2,
    p: 2,
    minWidth: 300,
    maxWidth: 500,
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",

  }} 
  {...props} />;
};

export default MyBox