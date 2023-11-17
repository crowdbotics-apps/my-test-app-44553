import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_expenses_list = createAsyncThunk(
  "expenses/api_v1_expenses_list",
  async payload => {
    const response = await apiService.api_v1_expenses_list(payload)
    return response.data
  }
)
export const api_v1_expenses_create = createAsyncThunk(
  "expenses/api_v1_expenses_create",
  async payload => {
    const response = await apiService.api_v1_expenses_create(payload)
    return response.data
  }
)
export const api_v1_expenses_retrieve = createAsyncThunk(
  "expenses/api_v1_expenses_retrieve",
  async payload => {
    const response = await apiService.api_v1_expenses_retrieve(payload)
    return response.data
  }
)
export const api_v1_expenses_update = createAsyncThunk(
  "expenses/api_v1_expenses_update",
  async payload => {
    const response = await apiService.api_v1_expenses_update(payload)
    return response.data
  }
)
export const api_v1_expenses_partial_update = createAsyncThunk(
  "expenses/api_v1_expenses_partial_update",
  async payload => {
    const response = await apiService.api_v1_expenses_partial_update(payload)
    return response.data
  }
)
export const api_v1_expenses_destroy = createAsyncThunk(
  "expenses/api_v1_expenses_destroy",
  async payload => {
    const response = await apiService.api_v1_expenses_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_expenses_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expenses_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expenses_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expenses_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expenses_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expenses_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_expenses_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_expenses_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_expenses_list,
  api_v1_expenses_create,
  api_v1_expenses_retrieve,
  api_v1_expenses_update,
  api_v1_expenses_partial_update,
  api_v1_expenses_destroy,
  slice: expensesSlice
}
