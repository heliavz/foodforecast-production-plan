import { Box, Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { categories, timeSlots } from "../../data/mockData";
import CategoryRow from "./CategoryRow";

const PRODUCT_COL_WIDTH = 260;
const TOTAL_COL_WIDTH = 90;
const SLOT_COL_WIDTH = 180;

// progress through the active slot (0 to 1) — hardcoded for demo
// in production this would be calculated from current time vs slot start/end
const SLOT_PROGRESS = 0.4;

export default function ProductionTable() {
  const [collapsed, setCollapsed] = useState({});
  const [showScrollShadow, setShowScrollShadow] = useState(false);
  const scrollRef = useRef(null);

  const toggleCategory = (catId) => {
    setCollapsed((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const allCollapsed =
    Object.values(collapsed).length > 0 &&
    categories.every((cat) => collapsed[cat.id]);

  // detect horizontal scroll position to show/hide right shadow
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const canScrollRight =
        el.scrollWidth > el.clientWidth + el.scrollLeft + 2;
      setShowScrollShadow(canScrollRight);
    };
    handleScroll();
    el.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
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
          overflowX: "hidden",
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
          <Typography
            variant="caption"
            sx={{ color: "text.muted", fontSize: "0.65rem" }}
          >
            Stk.
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
              pt: 1.5,
              pb: 0,
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
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                  }}
                >
                  JETZT
                </Box>
              )}

              {slot.isCompleted && (
                <Typography
                  variant="caption"
                  sx={{ color: "text.muted", fontSize: "0.7rem" }}
                >
                  ✓ Fertig
                </Typography>
              )}
            </Box>

            {/* Progress bar inside active slot header */}
            {slot.isActive && (
              <Box
                sx={{
                  width: "100%",
                  height: 4,
                  backgroundColor: "#FFE0B2",
                  borderRadius: 2,
                  overflow: "hidden",
                  mb: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: `${SLOT_PROGRESS * 100}%`,
                    height: "100%",
                    backgroundColor: "secondary.main",
                    borderRadius: 2,
                    transition: "width 0.5s ease",
                  }}
                />
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* SCROLLABLE BODY - with right shadow affordance */}
      <Box
        ref={scrollRef}
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "auto",
          position: "relative",
          // right edge shadow when more content exists
          "&::after": showScrollShadow
            ? {
                content: '""',
                position: "fixed",
                top: 64,
                right: 0,
                width: 48,
                height: "100%",
                background:
                  "linear-gradient(to left, rgba(0,0,0,0.06), transparent)",
                pointerEvents: "none",
                zIndex: 5,
              }
            : {},
        }}
      >
        <Box
          sx={{
            minWidth:
              PRODUCT_COL_WIDTH +
              TOTAL_COL_WIDTH +
              SLOT_COL_WIDTH * timeSlots.length,
          }}
        >
          {allCollapsed ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 8,
                color: "text.secondary",
              }}
            >
              <Typography variant="body2">
                Alle Kategorien eingeklappt - tippen zum Öffnen
              </Typography>
            </Box>
          ) : (
            categories.map((category) => (
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
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
}
