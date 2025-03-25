class misc {
    /**
     * @param {String} texto 
     * @returns {String}
     */
    sanitize(texto) {
        return texto
        .replaceAll("\\", "-")
        .replaceAll("/", "-")
        .replaceAll(":", "-")
        .replaceAll("*", "-")
        .replaceAll("?", "-")
        .replaceAll("\"", "-")
        .replaceAll("<", "-")
        .replaceAll(">", "-")
        .replaceAll("|", "-")
        .replaceAll(" ", "_")
    }
}