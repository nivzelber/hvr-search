import HighlightOffIcon from "@mui/icons-material/HighlightOffRounded";
import SearchIcon from "@mui/icons-material/SearchRounded";
import { IconButton } from "@mui/material";
import { useEffect, useRef } from "react";

import { useSearchStore } from "../../../../store/searchStore";

import { Search as StyledSearch, StyledInputBase } from "./search.styled";

export const Search = () => {
  const { search, setSearch, clearSearch } = useSearchStore();
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => clearSearch, []);

  return (
    <StyledSearch>
      <StyledInputBase
        value={search}
        inputRef={inputRef}
        onChange={e => setSearch(e.target.value)}
        startAdornment={
          <IconButton sx={{ color: "black" }}>
            <SearchIcon />
          </IconButton>
        }
        endAdornment={
          <IconButton
            sx={{ visibility: search.length > 0 ? "visible" : "hidden", color: "black" }}
            onClick={() => {
              clearSearch();
              inputRef.current?.focus();
            }}
          >
            <HighlightOffIcon />
          </IconButton>
        }
        placeholder="חפש/י..."
        inputProps={{ "aria-label": "search" }}
      />
    </StyledSearch>
  );
};
