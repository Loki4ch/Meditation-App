import fakeServerInstance from "./instance.js";

export const fetchMeditationsList = async () => {
    try {
        return await fakeServerInstance.get("/meditations");
    } catch (e) {
        console.log(e);
    }
}

export const postMeditation = (data) => fakeServerInstance.post("/meditations", {data});

