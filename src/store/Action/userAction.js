import {createAsyncThunk} from "@reduxjs/toolkit";


export const profile = createAsyncThunk(
    "user/profile",
    async (token) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/user/profile`, {
                method: "GET",
                headers: {
                    "Authorization":`Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })

            const data = response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    })

