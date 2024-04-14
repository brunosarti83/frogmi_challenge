export const apiBase = "http://localhost:3000/api";
export const apiEndpoints = {
    getFeatures: ({ magType, page }) => {
        if (magType.length) {
            return `${apiBase}/features?page=${page}&mag_type=${magType}`
        } else {
            return `${apiBase}/features?page=${page}`
        }
    },
    postComment: (id) => `${apiBase}/features/${id}/comments`,
}