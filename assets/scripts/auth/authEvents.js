const getFormFields = require('../../../lib/get-form-fields') // supplied module from GA
const api = require('../auth/authApi') // our user api
const ui = require('../auth/authUi') // user UI updates
const channelEvents = require('../channels/channel-events')

const store = require('../store')

// sign up for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onSignup = function(event) {
    event.preventDefault()
    const data = getFormFields(this)
    api.signUp(data)
        .then(ui.onSignUpSuccess)
        .catch(ui.onSignUpFailure)
}

// sign up for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onSignIn = function(event) {
    event.preventDefault()
    const data = getFormFields(this)
    api.signIn(data)
        .then(ui.onSignInSuccess)
        .then(setTimeout(() => $('.modalDialog-te').hide(), 1000))
        .catch(ui.onSignInFailure)
}

// change password for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onChangePassword = function(event) {
    event.preventDefault()

    const data = getFormFields(this)
    api.changePassword(data)
        .then(ui.onChangePasswordSuccess)
        .catch(ui.onChangePasswordFailure)
}

// sign out for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onSignOut = function(event) {
    event.preventDefault()

    api.signOut()
        .then(ui.onSignOutSuccess)
        .catch(ui.onSignOutFailure)
}

module.exports = {
    onSignup,
    onSignIn,
    onChangePassword,
    onSignOut
}