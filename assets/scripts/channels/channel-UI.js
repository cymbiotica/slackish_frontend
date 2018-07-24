'use strict'
const store = require('../store')

const onCreateChannelSuccess = function(data) {
    // set success message in modal - maybe close after a moment
    $('#create-channel-message').text('Channel Created')
    $('#create-channel-message').css('background-color', 'green')
}

const onShowChannels = function(data) {
    // generate channel link

    // the container
    const channelContainer = $('#channel-list')

    for (let i = 0; i < data.channels.length; i++) {
        // new channel link
        const channel = document.createElement('div')
            //channel.innerText = data.channel.name
        const channelLink = document.createElement('a')
        channelLink.setAttribute('href', '.messages')
        channelLink.innerText = data.channels[i].name
        channel.appendChild(channelLink)
        channelContainer.append(channel)
    }
}

module.exports = {
    onCreateChannelSuccess,
    onShowChannels
}