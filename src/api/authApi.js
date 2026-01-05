import axios from 'axios';
const API = axios.create({
    baseURL: `http://travelo-webb.runasp.net`,
    headers: {
        'Content-Type': 'application/json',
    },
});

// ================= Tourist Register =================
export const registerTourist = (formData) => 
    API.post('/api/Auth/register/tourist', formData);
// ================= Hotel Register =================
export const registerHotel = (formData) => 
    API.post('/api/Auth/register/hotel', formData);
// ================= Login =================
export const loginUser = (data) =>
  API.post("/api/Auth/login", data);

// ================= Forget Password =================
export const forgetPassword = (data) =>
  API.post("/api/Auth/forget-password", data);

// ================= Verify Code =================
export const verifyCode = (data) =>
  API.post("/api/Auth/verify-code", data);

// ================= Reset Password =================
export const resetPassword = (data) =>
  API.post("/api/Auth/reset-password", data);