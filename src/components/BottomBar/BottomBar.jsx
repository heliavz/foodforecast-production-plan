import { Box, Typography, IconButton, Button, Divider } from "@mui/material";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { branchInfo } from "../../data/mockData";

// labeled icon button
function ActionButton({ icon, label, color, bgColor, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.3,
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
        cursor: "pointer",
        minWidth: 52,
        minHeight: 44,
        backgroundColor: bgColor || "transparent",
        color: color || "text.secondary",
        "&:active": { backgroundColor: "#F0F0F0" },
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          fontSize: 20,
          display: "flex",
          alignItems: "center",
          color: "inherit",
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          fontSize: "0.6rem",
          fontWeight: 600,
          color: "inherit",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function BottomBar() {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderTop: "1px solid #E0E0E0",
        px: 3,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
        zIndex: 10,
      }}
    >
      {/* LEFT - branch + AI status */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", fontWeight: 500 }}
        >
          {branchInfo.name}
        </Typography>

        <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <CheckCircleOutlineRoundedIcon
            sx={{ fontSize: 14, color: "#4CAF50" }}
          />
          <Typography
            variant="caption"
            sx={{ color: "#4CAF50", fontWeight: 600 }}
          >
            KI aktiv
          </Typography>
        </Box>
      </Box>

      {/* CENTER - labeled action buttons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <ActionButton
          icon={<PrintRoundedIcon fontSize="inherit" />}
          label="Drucken"
          onClick={() => window.print()}
        />
        <ActionButton
          icon={<FileDownloadRoundedIcon fontSize="inherit" />}
          label="Export"
        />
        <ActionButton
          icon={<RefreshRoundedIcon fontSize="inherit" />}
          label="Aktualisieren"
        />
        <ActionButton
          icon={<WarningAmberRoundedIcon fontSize="inherit" />}
          label="Kritisch"
          color="#E8734A"
          bgColor="#FFF3EE"
        />
      </Box>

      {/* RIGHT - confirm button */}
      <Button
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.85rem",
          textTransform: "none",
          borderRadius: 2,
          px: 3,
          py: 1.2,
          minHeight: 44,
          "&:active": { backgroundColor: "primary.dark" },
        }}
      >
        Bestätigen
      </Button>
    </Box>
  );
}
