const getFormFields = require('../../../lib/get-form-fields') // supplied module from GA
const api = require('../auth/authApi') // our user api
const ui = require('../auth/authUi') // user UI updates
const channelEvents = require('../channels/channel-events')

const store = require('../store')

// sign up for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onSignup = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .then(setTimeout(() => $('#sign-up-message').text(''), 1000))
    .then(setTimeout(() => $('.modalDialog-te').hide(), 1500))
    .catch(ui.onSignUpFailure)
}

// sign up for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .then(setTimeout(() => $('#sign-in-message').text(''), 1000))
    .then(setTimeout(() => $('.modalDialog-te').hide(), 1500))
    // .then(setTimeout(() =>channelEvents.onShowChannels, 700))
    .catch(ui.onSignInFailure)
}

// change password for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .then(setTimeout(() => $('#change-password-message').text(''), 1000))
    .then(setTimeout(() => $('.modalDialog-te').hide(), 1500))
    .catch(ui.onChangePasswordFailure)
}

// sign out for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .then(setTimeout(() => $('#sign-out-message').text(''), 1000))
    .then(setTimeout(() => $('.modalDialog-te').hide(), 1500))
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignup,
  onSignIn,
  onChangePassword,
  onSignOut
}
