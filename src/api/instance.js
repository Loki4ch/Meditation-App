import axios from "axios";

const fakeServerInstance = axios.create({
    baseURL: "http://localhost:3003/",
    timeout: "1000",
    headers: {"x-auth": "auth token"},
});

export default fakeServerInstance;