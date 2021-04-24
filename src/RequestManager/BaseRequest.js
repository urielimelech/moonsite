import axios from "axios"

const getRequest = (url, callback) => {
    axios.get(url).then(res => callback(res.data))
}

export { getRequest }