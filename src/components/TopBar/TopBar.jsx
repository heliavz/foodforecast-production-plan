import {
  Box,
  Typography,
  Select,
  MenuItem,
  Tab,
  Tabs,
  Chip,
} from "@mui/material";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { branchInfo } from "../../data/mockData";

export default function TopBar({ activeTab, onTabChange }) {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        borderBottom: "1px solid #E0E0E0",
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
        flexShrink: 0,
        gap: 2,
      }}
    >
      {/* LEFT - branch selector + date + last updated */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Select
          value={branchInfo.name}
          size="small"
          sx={{
            fontWeight: 600,
            fontSize: "0.9rem",
            minWidth: 160,
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#E0E0E0" },
            "& .MuiSelect-select": { py: 1.2 },
          }}
        >
          <MenuItem value="Demo Filiale">Demo Filiale</MenuItem>
          <MenuItem value="Filiale Nord">Filiale Nord</MenuItem>
          <MenuItem value="Filiale Süd">Filiale Süd</MenuItem>
        </Select>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          {branchInfo.date}
        </Typography>

        {/* Last updated timestamp */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            backgroundColor: "#F5F5F5",
            borderRadius: 2,
            px: 1.5,
            py: 0.8,
          }}
        >
          <AccessTimeRoundedIcon
            sx={{ fontSize: 14, color: "text.secondary" }}
          />
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 500 }}
          >
            Aktualisiert: {branchInfo.lastUpdated} Uhr
          </Typography>
        </Box>
      </Box>

      {/* CENTER - Produktion / Auftauen tabs */}
      <Tabs
        value={activeTab}
        onChange={(_, newVal) => onTabChange(newVal)}
        sx={{
          "& .MuiTab-root": {
            fontWeight: 600,
            fontSize: "0.85rem",
            textTransform: "none",
            minHeight: 64,
            px: 3,
            // visible press state for tablet
            "&:active": { backgroundColor: "#F5F5F5" },
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "primary.main",
            height: 3,
          },
        }}
      >
        <Tab label="Produktion" />
        <Tab label="Auftauen" />
      </Tabs>

      {/* RIGHT - weather */}
      <Chip
        icon={<WbSunnyRoundedIcon sx={{ color: "#F5A623 !important" }} />}
        label={`${branchInfo.weather.temp}°C`}
        size="small"
        sx={{
          backgroundColor: "#FFF8E1",
          fontWeight: 600,
          color: "#E65100",
          border: "1px solid #FFE082",
          px: 0.5,
        }}
      />
    </Box>
  );
}
