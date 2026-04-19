import { Box, Typography, Tooltip } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const urgencyColors = {
  normal: "#4BBFBF",
  warning: "#F5A623",
  critical: "#E8734A",
};

const urgencyLabels = {
  normal: "Auf Kurs",
  warning: "Leicht verzögert",
  critical: "Kritisch – Produktion prüfen",
};

export default function TimeSlotCell({ slotData, slot, slotColWidth }) {
  if (!slotData)
    return (
      <Box
        sx={{
          width: slotColWidth,
          minWidth: slotColWidth,
          borderRight: "1px solid #F0F0F0",
        }}
      />
    );

  const isCompleted = slotData.status === "completed";
  const isActive = slotData.status === "active";
  const isUpcoming = slotData.status === "upcoming";
  const barColor = isCompleted
    ? "#B0BEC5"
    : urgencyColors[slotData.urgency] || urgencyColors.normal;

  return (
    <Box
      sx={{
        width: slotColWidth,
        minWidth: slotColWidth,
        px: 1.5,
        py: 1,
        borderRight: "1px solid #F0F0F0",
        backgroundColor: slot.isActive ? "#FFFAF5" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {slotData.quantity === 0 ? (
        <Typography variant="caption" sx={{ color: "text.muted" }}>
          —
        </Typography>
      ) : (
        <Tooltip
          title={
            isCompleted ? "Abgeschlossen" : urgencyLabels[slotData.urgency]
          }
          placement="top"
          arrow
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: barColor,
              borderRadius: 1.5,
              px: 1.5,
              py: 0.8,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              opacity: isCompleted ? 0.6 : 1,
              // left border accent for currently producing
              borderLeft: isActive
                ? "3px solid rgba(0,0,0,0.15)"
                : "3px solid transparent",
              cursor: "default",
              transition: "opacity 0.2s ease",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.82rem",
                whiteSpace: "nowrap",
              }}
            >
              {slotData.quantity} Stk.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {/* Manual override indicator */}
              {slotData.manualOverride && (
                <Tooltip title="Manuell angepasst" placement="top" arrow>
                  <EditRoundedIcon
                    sx={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }}
                  />
                </Tooltip>
              )}

              {/* Completed checkmark */}
              {isCompleted && (
                <CheckRoundedIcon
                  sx={{ fontSize: 14, color: "rgba(255,255,255,0.9)" }}
                />
              )}
            </Box>
          </Box>
        </Tooltip>
      )}
    </Box>
  );
}
