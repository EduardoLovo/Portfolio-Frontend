export const Api = {
    baseUrl: "https://portfolio-backend-eduardo.herokuapp.com/",

    // Endpoint = Login

    loginUrl: () => Api.baseUrl + "/login/",

    // Endpoint - Certificados

    readAllCertificadosUrl: () => Api.baseUrl + "/certificados",

    readByIdCertificadosUrl: id => Api.baseUrl + "/certificados/" + id,

    createCertificadosUrl: () => Api.baseUrl + "/certificados/create",

    updateCertificadosUrl: id => Api.baseUrl + "/certificados/" + id,

    deleteCertificadosUrl: id => Api.baseUrl + "/certificados/" + id,

    // Endpoint - Stacks

    readAllStacksUrl: () => Api.baseUrl + "/stacks",

    readByIdStacksUrl: id => Api.baseUrl + "/stacks/" + id,

    createStacksUrl: () => Api.baseUrl + "/stacks",

    updateStacksUrl: id => Api.baseUrl + "/stacks/" + id,

    deleteStacksUrl: id => Api.baseUrl + "/stacks/" + id,

    // Endpoint - Projetos

    readAllProjetosUrl: () => Api.baseUrl + "/projetos",

    readByIdProjetosUrl: id => Api.baseUrl + "/projetos/" + id,

    createProjetosProjetosUrl: () => Api.baseUrl + "/projetos",

    updateProjetosUrl: id => Api.baseUrl + "/projetos/" + id,

    deleteProjetosUrl: id => Api.baseUrl + "/projetos/" + id,

    // ===================================================

    // Auth Header

    authHeader: () => ({
        Authorization: "Bearer " + localStorage.getItem("JWT"),
    }),

    // GET
    buildApiGetRequest: (url, auth) =>
        fetch(url, {
            method: "GET",
            headers: auth ? new Headers(Api.authHeader()) : undefined,
        }),

    // POST
    buildApiPostRequest: (url, body, auth) =>
        fetch(url, {
            method: "POST",
            headers: new Headers({
                "Content-type": "application/json",
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),

    // PATCH
    buildApiPatchRequest: (url, body, auth) =>
        fetch(url, {
            method: "PATCH",
            headers: new Headers({
                "Content-type": "application/json",
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),

    // DELETE
    buildApiDeleteRequest: (url, auth) =>
        fetch(url, {
            method: "DELETE",
            headers: auth ? new Headers(Api.authHeader()) : undefined,
        }),
}