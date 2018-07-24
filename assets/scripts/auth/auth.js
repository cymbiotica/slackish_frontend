'use strict'
const events = require('./authEvents')

$(() => {
    $('#sign-up').on('submit', events.onSignup)
    $('#sign-in').on('submit', events.onSignIn)
    $('#change-password').on('submit', events.onChangePassword)
    $('#sign-out').on('submit', events.onSignOut)
    $('a[href^="#change-password-modal"]').hide()
    $('a[href^="#sign-out-modal"]').hide()
})