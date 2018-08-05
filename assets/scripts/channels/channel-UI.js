'use strict'
const store = require('../store')
const api = require('../channels/channel-api')
const events = require('../channels/channel-events')

const onCreateChannelSuccess = function(data) {
    store.channel = data.channel
        // set success message in modal - maybe close after a moment
    $('#create-channel-message').text('Channel Created')
    $('#create-channel-message').css('background-color', 'green')
    events.getChannels()
}

const createChannelList = function(data) {
    // generate channel link

    // the container
    const channelContainer = $('#channel-list')

    for (let i = 0; i < data.channels.length; i++) {
        store.channels = data.channels

        const deleteIcon = document.createElement('a')
        deleteIcon.innerHTML = '&#9985;'
        deleteIcon.setAttribute('class', 'delete-icon')
        deleteIcon.addEventListener('click', function() {
            event.preventDefault()
            api.deleteChannel(data.channels[i].id)
                .then(event.getChannels)
                // how can I show the list here without using channel-events.js
                // events.onDeleteChannel(data.channels[i].id)
        })

        const channelLink = document.createElement('div')
        channelLink.innerText = data.channels[i].name
        channelLink.append(deleteIcon)
        channelLink.addEventListener('click', function() {
            console.log('messages event handler worked')
        })

        const channel = document.createElement('div')
        channel.appendChild(channelLink)
        channelContainer.append(channel)
    }
}

const showChannel = function(channelId, data) {
    // need to set event handler again here.
    const channelList = $('#channel-list')
    channelList.empty()

    channelList.append(data.channel.name)
}


const onDeleteChannelSuccess = function() {
    events.getChannels()
}

const onUpdateChannelSuccess = function () {
    events.getChannels()
}

const hideChannels = function() {
    const channelList = $('#channel-list')
    channelList.empty()
}

module.exports = {
    onCreateChannelSuccess,
    createChannelList,
    showChannel,
    onDeleteChannelSuccess,
    onUpdateChannelSuccess,
    hideChannels
}