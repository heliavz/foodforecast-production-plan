import {
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Tooltip,
} from "@mui/material";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { branchInfo } from "../../data/mockData";

export default function BottomBar() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderTop: "1px solid #E0E0E0",
        px: 3,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
        zIndex: 10,
      }}
    >
      {/* LEFT - branch + status */}
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

      {/* CENTER - actions */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Tooltip title="Drucken (Backzettel)" placement="top" arrow>
          <IconButton
            onClick={handlePrint}
            size="small"
            sx={{
              color: "text.secondary",
              "&:hover": { backgroundColor: "#F5F5F5", color: "primary.main" },
            }}
          >
            <PrintRoundedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Exportieren" placement="top" arrow>
          <IconButton
            size="small"
            sx={{
              color: "text.secondary",
              "&:hover": { backgroundColor: "#F5F5F5", color: "primary.main" },
            }}
          >
            <FileDownloadRoundedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Prognose aktualisieren" placement="top" arrow>
          <IconButton
            size="small"
            sx={{
              color: "text.secondary",
              "&:hover": { backgroundColor: "#F5F5F5", color: "primary.main" },
            }}
          >
            <RefreshRoundedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip
          title="Kritische Artikel – Produktion prüfen"
          placement="top"
          arrow
        >
          <IconButton
            size="small"
            sx={{
              color: "#E8734A",
              backgroundColor: "#FFF3EE",
              "&:hover": { backgroundColor: "#FFE5D9" },
            }}
          >
            <WarningAmberRoundedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* RIGHT - confirm button */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          Aktualisiert: {branchInfo.lastUpdated} Uhr
        </Typography>

        <Button
          variant="contained"
          size="small"
          disableElevation
          sx={{
            backgroundColor: "primary.main",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.8rem",
            textTransform: "none",
            borderRadius: 2,
            px: 2.5,
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Bestätigen
        </Button>
      </Box>
    </Box>
  );
}
