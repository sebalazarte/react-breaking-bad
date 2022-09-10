import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { breakingBadApi } from "../../api/breakingBadApi";
import { Character } from "../../interfaces/BreackingBadResponse";
import { RootState } from "../../app/store";

interface CastState {
  characters: Character[];
  filtered: Character[];
  isLoading: boolean;
}

const initialState: CastState = {
  characters: [],
  filtered: [],
  isLoading: false,
};

export const getAllCastAsync = createAsyncThunk("cast/getAll", async () => {
  const resp = await breakingBadApi().get("/characters");
  return resp.data;
});

const castSlice = createSlice({
  name: "cast",
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      state.filtered = state.characters.filter((i) =>
        i.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllCastAsync.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getAllCastAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.characters = action.payload), (state.filtered = action.payload);
      });
  },
});

export const { filter } = castSlice.actions;
export const selectCast = (state: RootState) => state.cast;
export default castSlice.reducer;
