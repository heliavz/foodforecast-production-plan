import { Box, Typography } from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const urgencyColors = {
  normal: "#4BBFBF",
  warning: "#F5A623",
  critical: "#E8734A",
};

// visible labels instead of tooltips
const urgencyLabels = {
  warning: "!",
  critical: "!!",
};

export default function TimeSlotCell({ slotData, slot, slotColWidth, rowBg }) {
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
        backgroundColor: slot.isActive
          ? `rgba(255, 243, 224, 0.5)`
          : "transparent",
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
        <Box
          sx={{
            width: "100%",
            backgroundColor: barColor,
            borderRadius: 1.5,
            px: 1.5,
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            opacity: isCompleted ? 0.55 : 1,
            borderLeft: isActive
              ? "3px solid rgba(0,0,0,0.12)"
              : "3px solid transparent",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.85rem",
              whiteSpace: "nowrap",
            }}
          >
            {slotData.quantity} Stk.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {!isCompleted && slotData.urgency !== "normal" && (
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.25)",
                  borderRadius: 1,
                  px: 0.6,
                  py: 0.1,
                  lineHeight: 1,
                }}
              >
                <Typography
                  sx={{ fontSize: "0.65rem", fontWeight: 900, color: "#fff" }}
                >
                  {urgencyLabels[slotData.urgency]}
                </Typography>
              </Box>
            )}

            {/* Manual override indicator */}
            {slotData.manualOverride && (
              <EditRoundedIcon
                sx={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}
              />
            )}

            {/* Completed checkmark */}
            {isCompleted && (
              <CheckRoundedIcon
                sx={{ fontSize: 15, color: "rgba(255,255,255,0.9)" }}
              />
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
