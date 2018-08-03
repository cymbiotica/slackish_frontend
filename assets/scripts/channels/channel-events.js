const channelUI = require('../channels/channel-UI')
const channelApi = require('../channels/channel-api')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

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
        .then(channelUI.createChannelList)
        // .catch(channelUI.onCreateChannelFailure)
}

const hideChannels = function() {
    const channelList = $('#channel-list')
    channelList.empty()
}

const loadChannelMessages = function() {
    console.log('messages event worked')
}

const onGetChannel = function(event) {

    event.preventDefault()
    const data = getFormFields(event.target)
    let channelId = getChanId(data)

    channelApi.showChannel(channelId, data)
        .then(channelUI.showChannel(channelId, data))
}

const onDeleteChannel = function(event) {
    // event.preventDefault()
    // debugger
    // channelApi.deleteChannel(data)
    //     .then(channelUI.deleteChannel)

}

const onUpdateChannel = function(event) {
    event.preventDefault()
    let data = getFormFields(this)

    channelApi.updateChannel(getChanId(data), data)
    .then(this.getChannels)
}


// helper
const getChannelId = function(data) {
    let channelId
    for (let i = 0; i < store.channels.length; i++) {
        if (store.channels[i].name === data.channel.name) {
            channelId = store.channels[i].id
            return channelId
        }
    }
}


// helper
const getChanId = function(data) {
    let channelId
    for (let i = 0; i < store.channels.length; i++) {
        if (store.channels[i].name === data.channel.name) {
            // console.log(`store: ${store.channels[i].name}`)
            // console.log(`data: ${data.channel.name}`)
            channelId = store.channels[i].id
            return channelId
        }
    }
}
module.exports = {
    onCreateChannel,
    getChannels,
    onShowChannels,
    hideChannels,
    loadChannelMessages,
    onGetChannel,
    onDeleteChannel,
    onUpdateChannel
}