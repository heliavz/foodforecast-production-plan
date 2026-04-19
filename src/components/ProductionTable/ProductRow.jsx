import { Box, Typography } from "@mui/material";
import TimeSlotCell from "./TimeSlotCell";

export default function ProductRow({
  product,
  timeSlots,
  productColWidth,
  totalColWidth,
  slotColWidth,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        borderBottom: "1px solid #F0F0F0",
        minHeight: 52,
        "&:hover": {
          backgroundColor: "#FAFAFA",
        },
      }}
    >
      {/* Fixed product name column */}
      <Box
        sx={{
          width: productColWidth,
          minWidth: productColWidth,
          px: 3,
          py: 1.5,
          position: "sticky",
          left: 0,
          backgroundColor: "inherit",
          zIndex: 2,
          borderRight: "1px solid #E0E0E0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, color: "text.primary", lineHeight: 1.3 }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "text.muted", fontWeight: 400, mt: 0.3 }}
        >
          #{product.articleNumber}
        </Typography>
      </Box>

      {/* Fixed Gesamt column */}
      <Box
        sx={{
          width: totalColWidth,
          minWidth: totalColWidth,
          px: 2,
          py: 1.5,
          position: "sticky",
          left: productColWidth,
          backgroundColor: "#fff",
          zIndex: 2,
          borderRight: "2px solid #E0E0E0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: 700, color: "text.primary" }}
        >
          {product.total}
        </Typography>
      </Box>

      {/* Scrollable time slot cells */}
      {timeSlots.map((slot) => {
        const slotData = product.slots.find((s) => s.slotId === slot.id);
        return (
          <TimeSlotCell
            key={slot.id}
            slotData={slotData}
            slot={slot}
            slotColWidth={slotColWidth}
          />
        );
      })}
    </Box>
  );
}
