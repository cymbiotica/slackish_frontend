'use strict'
const store = require('../store')
const channelEvents = require('../channels/channel-events')

const onCreateChannelSuccess = function(data) {
    store.channel = data.channel
        // set success message in modal - maybe close after a moment
    $('#create-channel-message').text('Channel Created')
    $('#create-channel-message').css('background-color', 'green')
}

const createChannelList = function(data) {
    // generate channel link

    // the container
    const channelContainer = $('#channel-list')

    for (let i = 0; i < data.channels.length; i++) {
        // new channel link
        const channel = document.createElement('div')
        const channelLink = document.createElement('div')
            // channelLink.setAttribute('href', '.messages')
        channelLink.innerText = data.channels[i].name
        store.channels = data.channels
        channelLink.addEventListener('click', function() {
            console.log('messages event handler worked')
        })
        channel.appendChild(channelLink)
        channelContainer.append(channel)
    }
}

const showChannel = function(channelId, data) {
    const channelContainer = $('#channel-list')
    const channelList = $('#channel-list')
    channelList.empty()
    channelList.append(data.channel.name)
}

module.exports = {
    onCreateChannelSuccess,
    createChannelList,
    showChannel
}