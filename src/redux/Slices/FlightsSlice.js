import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BaseURL = "http://travelo-webb.runasp.net"
const token = "";


export const fetchAirports = createAsyncThunk(
  "airport/fetchAirports",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BaseURL}/Airport`,{
        headers:{
          "Authorization": `Bearer ${token}`,
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const SubmitAirports = createAsyncThunk(
  "airport/submitAirports",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BaseURL}/Airport`,{
        headers:{
          "Authorization": `Bearer ${token}`,
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// get airport by id
export const fetchAirportsById = createAsyncThunk(
  "airport/fetchAirportById",
  async (airportId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BaseURL}/Airport/{id}`,{
        headers:{
          "Authorization": `Bearer ${token}`,
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);



const initialState ={
    airports:[],
    airportId:null,
    name:"",
    city:"",
    country:"",
    iataCode:"",
     rejectReason: null,
    loading:false,
    error:null,
}

const flightSlice = createSlice({
    name:"flights",
    initialState,
    reducers:{
        setName:(state , action)=>{
            state.name = action.payload;
        },
        setCity :(state , action)=>{
            state.city = action.payload;
        },
        setCountry : (state , action)=>{
            state.country= action.payload;
        },
        setId :(state,action)=>{
            state.airportId = action.payload;
        },
        setIataCode:(state,action)=>{
            state.iataCode = action.payload;
        },
        setRejectReason: (state, action) => {
      state.rejectReason = action.payload;
       },

    },
    extraReducers:(bulider)=>{
        bulider
       .addCase(fetchAirports.pending,(state)=>{
      state.loading = true;
      state.error = null
    })
    .addCase(fetchAirports.fulfilled,(state,action)=>{
      state.loading = false;
      state.inquiries = action.payload
      
    })
    .addCase(fetchAirports.rejected,(state,action)=>{
      state.loading = false,
      state.error = action.payload;
    })
    .addCase(SubmitAirports.pending,(state)=>{
      state.loading = true;
      state.error = null
    })
    .addCase(SubmitAirports.fulfilled,(state,action)=>{
      state.loading = false;
      state.inquiries = action.payload
      
    })
    .addCase(SubmitAirports.rejected,(state,action)=>{
      state.loading = false,
      state.error = action.payload;
    })
    .addCase(fetchAirportsById.pending,(state)=>{
      state.loading = true;
      state.error = null
    })
    .addCase(fetchAirportsById.fulfilled,(state,action)=>{
      state.loading = false;
      state.inquiries = action.payload
      
    })
    .addCase(fetchAirportsById.rejected,(state,action)=>{
      state.loading = false,
      state.error = action.payload;
    })
    }
})

export const {
    setCity,
    setCountry,
    setIataCode,
    setId,
    setName,
    setRejectReason,    
} = flightSlice.actions;

export default flightSlice.reducer;