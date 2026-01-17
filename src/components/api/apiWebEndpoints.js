const BASR_URL = import.meta.env.VITE_API_URL;

const API_URL = `${BASR_URL}/api`;

console.log("Base URL is: ", BASR_URL);
console.log("Base Api URL is: ", API_URL);

export const apiEndpoint = {
    COLLECTION: `${API_URL}/collections`,
    GALLERY: `${API_URL}/gallery`,
    PHOTOS: `${API_URL}/photos`,
}