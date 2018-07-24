const channelUI = require('../channels/channel-UI')
const channelApi = require('../channels/channel-api')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateChannel = function(event) {
    event.preventDefault()
    const data = getFormFields(this)
    channelApi.createChannel(data)
        .then(channelUI.onCreateChannelSuccess)
        .catch(channelUI.onCreateChannelFailure)
}

// use this when you have an event that wants to trigger a shows channels request
const onShowChannels = function(event) {
    event.preventDefault
    getChannels()
}

// generic event-less api request
const getChannels = function() {
    this.hideChannels()
    channelApi.showChannels()
        .then(channelUI.onShowChannels)
        // .catch(channelUI.onCreateChannelFailure)
}

const hideChannels = function() {
    const channelList = $('#channel-list')
    channelList.empty()
}

module.exports = {
    onCreateChannel,
    getChannels,
    onShowChannels,
    hideChannels
}