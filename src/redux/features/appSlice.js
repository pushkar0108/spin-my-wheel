import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DEFAULT_SEGMENTS } from '../../config/constants';
import getLLMConfig from "../../services/gemini";

export const fetchLLMGeneratedConfig = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userPrompt, thunkAPI) => {
    const config = await getLLMConfig(userPrompt);
    return config;
  }
)

const appSlice = createSlice({
  name: "app",
  initialState: {
    segments: DEFAULT_SEGMENTS,
    itemBackgroundColors: null,
    selectedPalette: 0,
    showConfetti: false,
    results: [],
    spinningSpeed: 300,
    spinningSound: '',
    winningSound: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setAppLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSegments: (state, action) => {
      state.segments = action.payload;
    },
    setSelectedPalette: (state, action) => {
      state.selectedPalette = action.payload;
      state.itemBackgroundColors = null; // This is set by LLM only
    },
    setSpinningSpeed: (state, action) => {
      state.spinningSpeed = action.payload;
    },
    setShowConfetti: (state, action) => {
      state.showConfetti = action.payload;
    },
    addResult: (state, action) => {
      state.results = [...state.results, action.payload];
      state.showConfetti = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLLMGeneratedConfig.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchLLMGeneratedConfig.fulfilled, (state, action) => {
        state.isLoading = false;
        state.itemBackgroundColors = action.payload.itemBackgroundColors;
        state.segments = action.payload.items.map(item => {
          return [item.label, true];
        });
      })
      .addCase(fetchLLMGeneratedConfig.rejected, (state, action) => {
        state.error = "Something went wrong. Please try again later.";
        state.isLoading = false;
      });
  }
});

export const {
  setAppLoading, setSegments, setSelectedPalette, setSpinningSpeed, setShowConfetti, addResult
} = appSlice.actions;
export default appSlice.reducer;