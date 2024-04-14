export const apiBase = "http://localhost:3000/api";
export const apiEndpoints = {
    getFeatures: `${apiBase}/features`,
    postComment: (id) => `${apiBase}/features${id}/comments`,
}