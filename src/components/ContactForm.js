import { m } from "framer-motion";
// @mui
import { Button, TextField, Stack, Box } from "@mui/material";
// components

// ----------------------------------------------------------------------

export default function ContactForm() {
  return (
    <Stack  spacing={5}>
      <Stack spacing={3}>
        <TextField fullWidth label="Name" />

        <TextField fullWidth label="Email" />

        <TextField fullWidth label="Contact Number" />

        <TextField
          fullWidth
          label="Enter your message here."
          multiline
          rows={4}
        />
      </Stack>

      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained">Submit Now</Button>
      </Box>
    </Stack>
  );
}
