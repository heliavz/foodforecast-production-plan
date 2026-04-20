import { Box, Typography } from "@mui/material";
import { useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import BottomBar from "./components/BottomBar/BottomBar";
import ProductionTable from "./components/ProductionTable/ProductionTable";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

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
      <TopBar activeTab={activeTab} onTabChange={setActiveTab} />

      <Box
        className="print-area"
        sx={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {activeTab === 0 ? (
          <ProductionTable />
        ) : (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              color: "text.secondary",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "text.secondary" }}
            >
              Auftauplanung
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                textAlign: "center",
                maxWidth: 320,
                lineHeight: 1.8,
              }}
            >
              Die Auftauplanung ist ein separates Modul mit eigenem
              Zeitlogik-System. Es wurde im Rahmen dieses Konzepts bewusst
              ausgeklammert.
            </Typography>
          </Box>
        )}
      </Box>

      <BottomBar />
    </Box>
  );
}
