import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const featuresRouter = require("./routes/features");

app.use(express.json());
app.use("/api/features", featuresRouter);

const initialState = {
  items: [],
  status: null,
  createStatus: null,
//   editStatus: null,
//   deleteStatus: null,
};

export const featureFetch = createAsyncThunk(
  "features/featuresFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/features`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const featureCreate = createAsyncThunk(
  "features/featuresCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/features`,
        values,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data, {
        position: "bottom-left",
      });
    }
  }
);

export const featuresEdit = createAsyncThunk(
  "features/featuresEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/features/${values.features._id}`,
        values,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data, {
        position: "bottom-left",
      });
    }
  }
);

export const featuresDelete = createAsyncThunk(
  "features/featuresDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/features/${id}`,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response?.data, {
        position: "bottom-left",
      });
    }
  }
);

export default featuresSlice.reducer;
