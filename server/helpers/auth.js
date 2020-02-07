const basicAuth = require('express-basic-auth')

module.exports.Basic = () => basicAuth({
    users: { 'pboadmin': 'bahandiBurgerz' }
})