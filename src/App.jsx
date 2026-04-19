import { Box } from "@mui/material";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";
import ProductionTable from "./components/ProductionTable/ProductionTable";

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "background.default",
      }}
    >
      <TopBar />

      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProductionTable />
      </Box>

      <BottomBar />
    </Box>
  );
}
