'use strict'
const events = require('../channels/channel-events')
$(() => {
    $('a[href^="#change-password-modal"]').hide()
    $('a[href^="#sign-out-modal"]').hide()
    $('#create-channel').on('submit', events.onCreateChannel)

    // generic click handler that will show any modal when the associated anchor is clicked
    $('a[href$="-modal"]').on('click', function() {
        $('div[id$="modal"]').show()
    })
       $('#channel-search').on('submit', events.onGetChannel)
    $('.delete-icon').on('click', events.onShowChannels)
    $('#update-channel').on('submit', events.onUpdateChannel)
})