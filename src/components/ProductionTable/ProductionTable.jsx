import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { categories, timeSlots } from "../../data/mockData";
import CategoryRow from "./CategoryRow";

const PRODUCT_COL_WIDTH = 260;
const TOTAL_COL_WIDTH = 80;
const SLOT_COL_WIDTH = 180;

export default function ProductionTable() {
  const [collapsed, setCollapsed] = useState({});

  const toggleCategory = (catId) => {
    setCollapsed((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  return (
    <Box
      sx={{
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* TABLE HEADER */}
      <Box
        sx={{
          display: "flex",
          flexShrink: 0,
          backgroundColor: "background.tableHeader",
          borderBottom: "2px solid #E0E0E0",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        {/* Fixed Artikel column */}
        <Box
          sx={{
            width: PRODUCT_COL_WIDTH,
            minWidth: PRODUCT_COL_WIDTH,
            px: 3,
            py: 1.5,
            position: "sticky",
            left: 0,
            backgroundColor: "background.tableHeader",
            zIndex: 11,
            borderRight: "1px solid #E0E0E0",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: "text.secondary",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Artikel
          </Typography>
        </Box>

        {/* Fixed Gesamt column */}
        <Box
          sx={{
            width: TOTAL_COL_WIDTH,
            minWidth: TOTAL_COL_WIDTH,
            px: 2,
            py: 1.5,
            position: "sticky",
            left: PRODUCT_COL_WIDTH,
            backgroundColor: "background.tableHeader",
            zIndex: 11,
            borderRight: "2px solid #E0E0E0",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: "text.secondary",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Gesamt
          </Typography>
        </Box>

        {/* Scrollable time slot columns */}
        {timeSlots.map((slot) => (
          <Box
            key={slot.id}
            sx={{
              width: SLOT_COL_WIDTH,
              minWidth: SLOT_COL_WIDTH,
              px: 2,
              py: 1.5,
              backgroundColor: slot.isActive
                ? "#FFF3E0"
                : "background.tableHeader",
              borderRight: "1px solid #E0E0E0",
              borderBottom: slot.isActive
                ? "3px solid"
                : "3px solid transparent",
              borderBottomColor: slot.isActive
                ? "secondary.main"
                : "transparent",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: slot.isActive ? 800 : 700,
                color: slot.isActive ? "secondary.main" : "text.secondary",
                letterSpacing: 0.5,
                textTransform: "uppercase",
              }}
            >
              {slot.label}
            </Typography>
            {slot.isActive && (
              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  color: "#fff",
                  fontSize: "0.6rem",
                  fontWeight: 800,
                  px: 0.8,
                  py: 0.2,
                  borderRadius: 1,
                  letterSpacing: 0.5,
                }}
              >
                JETZT
              </Box>
            )}
            {slot.isCompleted && (
              <Typography
                variant="caption"
                sx={{ color: "text.muted", fontSize: "0.65rem" }}
              >
                ✓
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* SCROLLABLE BODY */}
      <Box sx={{ flex: 1, overflowY: "auto", overflowX: "auto" }}>
        <Box
          sx={{
            minWidth:
              PRODUCT_COL_WIDTH +
              TOTAL_COL_WIDTH +
              SLOT_COL_WIDTH * timeSlots.length,
          }}
        >
          {categories.map((category) => (
            <CategoryRow
              key={category.id}
              category={category}
              timeSlots={timeSlots}
              isCollapsed={!!collapsed[category.id]}
              onToggle={() => toggleCategory(category.id)}
              productColWidth={PRODUCT_COL_WIDTH}
              totalColWidth={TOTAL_COL_WIDTH}
              slotColWidth={SLOT_COL_WIDTH}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
