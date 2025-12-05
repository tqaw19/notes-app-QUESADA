import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { searchInputSX } from "./styles/SearchInput";

interface SearchInputProps {
  searchValue: string;
}

export const SearchInput = () => {
  return (
    <TextField
      placeholder="Search"
      variant="outlined"
      fullWidth
      sx={searchInputSX}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined
                sx={{ color: (theme) => theme.customPalette.gray }}
              />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
