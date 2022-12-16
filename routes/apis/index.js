const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const admin = require('./modules/admin')

const userController = require('../../controllers/user-controller')
const tweetController = require('../../controllers/tweet-controller')

const { authenticated, authenticatedUser } = require('../../middleware/api-auth')
const { apiErrorHandler } = require('../../middleware/error-handler')

router.use('/admin', admin)

router.post('/users', userController.register)

router.post('/login', passport.authenticate('local', { session: false }), userController.login)
router.get('/users/:id/tweets', authenticated, authenticatedUser, userController.getUserTweets)
router.get('/users/:id', authenticated, authenticatedUser, userController.getUser)

router.post('/tweets/:id/unlike', authenticated, authenticatedUser, tweetController.removeLike)
router.post('/tweets/:id/like', authenticated, authenticatedUser, tweetController.addLike)
router.post('/tweets/:tweet_id/replies', authenticated, authenticatedUser, tweetController.replyTweet)
router.get('/tweets/:tweet_id', authenticated, authenticatedUser, tweetController.getTweet)
router.get('/tweets', authenticated, authenticatedUser, tweetController.getTweets)
router.post('/tweets', authenticated, authenticatedUser, tweetController.postTweets)

router.use('/', apiErrorHandler)

module.exports = router
