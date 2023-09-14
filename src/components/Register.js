import { Stack,Box, Button, Typography } from "@mui/material";
import React from "react";

function Register() {
  return (
    <>
      <Box className="register-body" sx={{ p: 5 }}>
        <Stack>
          <Typography
            variant="h4"
            fontWeight={600}
            className="register"
            sx={{ pt: 4, pb: 2 }}
          >
            Register Today For VIP First Access
          </Typography>
          <Typography
            variant="body1"
            className="register"
            sx={{  pb: 2 }}
          >
            Get excluisive first access to floor plans and the best pricing
          </Typography>
        </Stack>
        <Stack alignItems="center" justifyContent="center">
          <Button color="error"  variant="contained" sx={{ p: 2.7, borderRadius:'50px' }} className="register-now">
            Register Now
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default Register;
