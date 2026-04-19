import { Box, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import ProductRow from "./ProductRow";

export default function CategoryRow({
  category,
  timeSlots,
  isCollapsed,
  onToggle,
  productColWidth,
  totalColWidth,
  slotColWidth,
}) {
  return (
    <Box>
      {/* Category header */}
      <Box
        onClick={onToggle}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FAFAFA",
          borderBottom: "1px solid #E0E0E0",
          borderTop: "1px solid #E0E0E0",
          cursor: "pointer",
          userSelect: "none",
          minHeight: 44,
          px: 2,
          gap: 1,
          "&:hover": {
            backgroundColor: "#F0F0F0",
          },
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
            "&:hover": { backgroundColor: "#E0E0E0" },
          }}
        >
          {isCollapsed ? (
            <KeyboardArrowRightRoundedIcon
              sx={{ fontSize: 20, color: "text.secondary" }}
            />
          ) : (
            <KeyboardArrowDownRoundedIcon
              sx={{ fontSize: 20, color: "text.secondary" }}
            />
          )}
        </Box>
        <Typography
          variant="body2"
          sx={{ fontWeight: 700, color: "text.primary", letterSpacing: 0.3 }}
        >
          {category.label}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary", ml: 0.5 }}>
          ({category.products.length})
        </Typography>
      </Box>

      {/* Product rows */}
      {!isCollapsed &&
        category.products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            timeSlots={timeSlots}
            productColWidth={productColWidth}
            totalColWidth={totalColWidth}
            slotColWidth={slotColWidth}
          />
        ))}
    </Box>
  );
}
