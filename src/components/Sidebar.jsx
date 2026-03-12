import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          style={{
            background:
              category.name === selectedCategory
                ? "linear-gradient(90deg,#38bdf8,#f472b6)"
                : "transparent",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "#38bdf8",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>

          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.7",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
