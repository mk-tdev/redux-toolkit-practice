import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

export interface HabitState {
  habits: Habit[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HabitState = {
  habits: [],
  isLoading: false,
  error: null,
};

export const fetchHabbits = createAsyncThunk("habits/fetchHabbits", async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });

  return [
    {
      id: "1",
      name: "Read articles",
      frequency: "daily",
      completedDates: [],
      createdAt: new Date().toISOString(),
    } as Habit,
    {
      id: "2",
      name: "Practice coding",
      frequency: "weekly",
      completedDates: [],
      createdAt: new Date().toISOString(),
    } as Habit,
  ];
});

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const { name, freq } = action.payload;
      const newHabbit = {
        id: Date.now().toString(),
        name,
        frequency: freq,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabbit);
    },
    removeHabit: (state, action) => {
      state.habits = state.habits.filter(
        (habit) => habit.id !== action.payload.id
      );
    },
    toggleHabit: (state, action) => {
      const habit = state.habits.find(
        (habit) => habit.id === action.payload.id
      );
      if (habit) {
        const index = habit.completedDates.indexOf(action.payload.date);

        if (index > -1) {
          habit.completedDates.splice(index, 1);
        } else {
          habit.completedDates.push(action.payload.date);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabbits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHabbits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.habits = action.payload;
      })
      .addCase(fetchHabbits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch habits";
      });
  },
});

export const { addHabit, removeHabit, toggleHabit } = habitSlice.actions;

export default habitSlice.reducer;
