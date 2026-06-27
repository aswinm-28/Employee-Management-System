import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";

function Login() {

  const [formData,setFormData] = useState({
    username:'',
    password:''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f4f5f7",
      }}
    >
      <Card sx={{ width: 360, borderRadius: 3, boxShadow: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Avatar sx={{ bgcolor: "primary.main", mb: 1.5 }}>
              <LockOutlinedIcon />
            </Avatar>
           <Typography variant="h5" component="h1" gutterBottom>
              Log In
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enter your credentials to continue
            </Typography>
          </Box>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
            onSubmit={handleSubmit}
          >
            <TextField
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              fullWidth
              value={formData.username}
              onChange={handleChange}
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 1, py: 1.2, textTransform: "none" }}
            >
              Log In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;