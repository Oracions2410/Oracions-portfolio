const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const contactRoutes = require('./api/routes/contactRoutes')
const fileRoutes = require('./api/routes/fileRoutes')
const linkRoutes = require('./api/routes/linkRoutes')
const languageRoute = require('./api/routes/languageRoutes')
const postRoutes = require('./api/routes/postRoutes')
const projectRoutes = require('./api/routes/projectRoute')
const techRoutes = require('./api/routes/techRoutes')

const constants = require('./api/constants/routeContantes')
const db = require('./api/database/mongo')

db.mongoConnect()


app.use('/ping', (req, res) => {
    res.send(`Server is running on ${req.protocol}://${req.get('host')}`)
})


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// ----------------------  Routes ------------------------------
app.use(constants.CONTACT_BASE_END_POINT, contactRoutes)
app.use(constants.FILE_BASE_END_POINT, fileRoutes)
app.use(constants.LINK_BASE_END_POINT, linkRoutes)
app.use(constants.LANGUAGE_BASE_END_POINT, languageRoute)
app.use(constants.POST_BASE_END_POINT, postRoutes)
app.use(constants.PROJECT_BASE_END_POINT, projectRoutes)
app.use(constants.TECH_BASE_END_POINT, techRoutes)
// ------------X---------  Routes ----------X-------------------




// ---------------- Error middlewares -------------------------

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ message: error.message })
})

// -------X-------- Error middlewares -----------X-------------


module.exports = app