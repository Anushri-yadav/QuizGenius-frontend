const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;


export async function registerUser(
    username,
    password
) {

    const response = await fetch(
        `${API_URL}/register`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                password
            })
        }
    );


    const data = await response.text();


    if (!response.ok) {
        throw new Error(data);
    }


    return data;
}



export async function loginUser(
    username,
    password
) {

    const response = await fetch(
        `${API_URL}/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                password
            })
        }
    );


    const text = await response.text();


    if (!response.ok) {
        throw new Error(
            text || "Invalid username or password."
        );
    }


    return JSON.parse(text);
}



export function logoutUser() {

    localStorage.removeItem("token");

    localStorage.removeItem("username");
}



export function getToken() {

    return localStorage.getItem("token");
}



export function isLoggedIn() {

    return !!localStorage.getItem("token");
}