'use strict'
const events = require('../channels/channel-events')
$(() => {
    $('#create-channel').on('submit', events.onCreateChannel)
})