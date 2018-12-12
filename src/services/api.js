import axios from "axios";

// AVD http://10.0.3.2:3000
// Genymotion  http://10.0.3.2:3000


const api = axios.create({baseURL:'http://10.0.3.2:5000'});

export default api;