import axios from "axios";

const fakeServerInstance = axios.create({
    baseURL: "http://localhost:3003/",
    timeout: "1000",
});

export default fakeServerInstance;