import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box>
      <ProSidebar>
        <Menu>
          <MenuItem></MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
