import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchComponent from "../Search";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DialogComponent from "../Dialog/index";
import Tooltip from "@mui/material/Tooltip";

export default function ToolbarComponent() {
  const [showDialog, setShowDialog] = useState(false);

  const handleCreatePhrase = () => {};
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Tooltip title="Nueva Frase">
              <IconButton
                onClick={() => setShowDialog(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <AddBoxIcon />
              </IconButton>
            </Tooltip>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Frases App
            </Typography>
            <SearchComponent />
          </Toolbar>
        </AppBar>
      </Box>
      <DialogComponent
        open={showDialog}
        setOpen={setShowDialog}
        title="Agregar una nueva frase"
        handleOnConfirm={handleCreatePhrase}
      />
    </>
  );
}
