const baseUrl = 'http://2013.deolhonasmetas.org.br/api/public/'

export default {

    getDistricts () {
        const url = `${baseUrl}districts`

        return fetch(url)
            .then(response => response.json())
            .then(response => response)
            .catch(error => error.json())
            .catch(error => error)
    },

    getGoals (districtId) {
        const url = `${baseUrl}goals?region_id=${districtId}`

        return fetch(url)
            .then(response => response.json())
            .then(response => response)
            .catch(error => error.json())
            .catch(error => error)
    }
}