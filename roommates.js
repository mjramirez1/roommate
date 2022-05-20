const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

const newRoommate = async () => {
    try {
        const { data } = await axios.get('https://randomuser.me/api/')
        const roomie = data.results[0]
        const roomieUuid = {
            id: uuidv4().slice(6),
            name: `${roomie.name.first} ${roomie.name.last}`,
            email: roomie.email
        }
        return roomieUuid
    } catch (err) {
        throw err
    }
}

module.exports = newRoommate