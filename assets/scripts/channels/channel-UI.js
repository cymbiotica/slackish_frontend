'use strict'
const store = require('../store')
const api = require('../channels/channel-api')
// const events = require('../channels/channel-events')

const onCreateChannelSuccess = function (data, getChannels) {
  store.channel = data.channel
  // set success message in modal - maybe close after a moment
  $('#create-channel-message').text('Channel Created')
  $('#create-channel-message').css('background-color', 'green')
  getChannels()
}

const createChannelList = function (data, showChannels) {
  const channelContainer = $('#channel-list')

  for (let i = 0; i < data.channels.length; i++) {
    store.channels = data.channels

    const deleteIcon = document.createElement('a')
    deleteIcon.innerHTML = '&#9985;'
    deleteIcon.setAttribute('class', 'delete-icon')
    deleteIcon.addEventListener('click', function (event) {
      api.deleteChannel(data.channels[i].id)
        .then((event) => {
          onDeleteChannelSuccess(event, showChannels)
        })
    })

    const channelLink = document.createElement('div')
    channelLink.innerText = data.channels[i].name
    channelLink.append(deleteIcon)
    // channelLink.addEventListener('click', function () {
    //     console.log('messages event handler worked')
    // })

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

const onDeleteChannelSuccess = function (event, showChannels) {
  // event.preventDefault()
  showChannels()
}

const onUpdateChannelSuccess = function (data, getChannels) {
  getChannels()
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