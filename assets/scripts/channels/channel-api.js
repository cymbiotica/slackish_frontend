'use strict'
const store = require('../store')
const config = require('../config')

const showChannels = function() {
    return $.ajax({
        url: config.apiUrl + '/channels',
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + store.user.token
        }
    })
}
const createChannel = function(data) {
    return $.ajax({
        url: config.apiUrl + '/channels',
        method: 'POST',
        headers: {
            Authorization: 'Token token=' + store.user.token
        },
        data
    })
}

module.exports = {
    showChannels,
    createChannel
}