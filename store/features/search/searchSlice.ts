import { useAppSelector } from "@/app/store/store";
import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  search: string;
  searchResults: Product[];
} = {
  search: "",
  searchResults: [],
};

const SearchSlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    clearSearch: (state) => {
      state.search = "";
    },
    setSearchResults: (state, action: PayloadAction<Product[]>) => {
      state.searchResults = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
    clearSearchData: (state) => {
      state.search = "";
      state.searchResults = [];
    },
  },
});

export const {
  clearSearch,
  setSearch,
  clearSearchResults,
  setSearchResults,
  clearSearchData,
} = SearchSlice.actions;
export default SearchSlice;
