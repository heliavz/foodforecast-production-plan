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
          minHeight: 52,
          px: 2,
          gap: 1,
          "&:active": { backgroundColor: "#EEEEEE" },
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
            backgroundColor: "#EFEFEF",
            flexShrink: 0,
          }}
        >
          {isCollapsed ? (
            <KeyboardArrowRightRoundedIcon
              sx={{ fontSize: 22, color: "text.secondary" }}
            />
          ) : (
            <KeyboardArrowDownRoundedIcon
              sx={{ fontSize: 22, color: "text.secondary" }}
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
          ({category.products.length} Artikel)
        </Typography>
      </Box>

      {/* Product rows */}
      {!isCollapsed &&
        category.products.map((product, index) => (
          <ProductRow
            key={product.id}
            product={product}
            timeSlots={timeSlots}
            productColWidth={productColWidth}
            totalColWidth={totalColWidth}
            slotColWidth={slotColWidth}
            isEven={index % 2 === 0}
          />
        ))}
    </Box>
  );
}
