import fakeServerInstance from "./instance.js";

export const fetchMeditationsList = async () => {
    try {
        return await fakeServerInstance.get("/meditations");
    } catch (e) {
        console.log(e);
    }
}

export const postMeditation = async ({id, name, description, daytime}) => {
    try {
        return await fakeServerInstance.post("/meditations", {id, name, description, daytime});
    } catch (e) {
        console.log(e);
    }
}

export const putMeditation = async (id, {name, description, daytime}) => {
    try {
        return await fakeServerInstance.put(`/meditations/${id}`, {id, name, description, daytime});
    } catch (e) {
        console.log(e);
    }
}

export const removeMeditation = async (id) => {
    try {
        return await fakeServerInstance.delete(`/meditations/${id}`);
    } catch (e) {
        console.log(e);
    }
}

