import { createAsyncThunk } from "@reduxjs/toolkit";



export const login = createAsyncThunk(
    "user/login",
    async (user) => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })

            const data = await response.json();
            return data;
        } catch (error) {
            console.log("error", error);
        }

    }
)

export const signup = createAsyncThunk(
    "user/signup",
    async (user) => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })

            const data = response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    })


export const forgotPassword = createAsyncThunk(
    "user/forgotPassword",
    async (user) => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/user/forgotPassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })

            const data = response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    })

export const resetPassword = createAsyncThunk(
    "user/resetPassword",
    async ({passwordInput,token}) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/user/resetPassword/${token}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({password:passwordInput})
            })

            const data = response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    })

export const update = createAsyncThunk(
    "user/update",
    async ({udata,user}) => {
        try {
            console.log("kkkk",user)
            const response = await fetch(`http://localhost:8000/api/v1/user/${user}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({data:{courseEnrolled:{
                    enrolled:[udata]
                }}})
            })

            const data = response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    })

