'use strict'
const store = require('../store')
const config = require('../config')

const showChannels = function () {
  return $.ajax({
    url: config.apiUrl + '/channels',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showChannel = function (channelId) {
  return $.ajax({
    url: config.apiUrl + `/channels/${channelId}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createChannel = function (data) {
  return $.ajax({
    url: config.apiUrl + '/channels',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteChannel = function (channelId) {
  return $.ajax({
    url: config.apiUrl + `/channels/${channelId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateChannel = function (channelId, data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + `/channels/${channelId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      channel: {
        // where is this stuff?
        name: data.channel.new_name
        // description: store.data.description
      }
    }
  })
}

module.exports = {
  showChannels,
  showChannel,
  createChannel,
  deleteChannel,
  updateChannel
}
