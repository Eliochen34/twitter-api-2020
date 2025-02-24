const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const admin = require('./modules/admin')
const upload = require('../../middleware/multer')

const userController = require('../../controllers/user-controller')
const tweetController = require('../../controllers/tweet-controller')
const followshipController = require('../../controllers/followship-controller')

const { authenticated, authenticatedUser, authenticatedStatus } = require('../../middleware/api-auth')
const { apiErrorHandler } = require('../../middleware/error-handler')

router.use('/admin', admin)

router.get('/tokenAuthenticate', authenticatedStatus)

router.post('/users', userController.register) // 註冊
router.post('/login', passport.authenticate('local', { session: false }), userController.login)

router.post('/followships', authenticated, authenticatedUser, followshipController.addFollow)
router.delete('/followships/:followingId', authenticated, authenticatedUser, followshipController.removeFollow)

router.get('/users/recommendUsers', authenticated, authenticatedUser, userController.getRecommendUsers)
router.get('/users/self', authenticated, authenticatedUser, userController.getUserSelf)
router.get('/users/:id/followings', authenticated, authenticatedUser, userController.getUserFollowings)
router.get('/users/:id/followers', authenticated, authenticatedUser, userController.getUserFollowers)
router.get('/users/:id/likes', authenticated, authenticatedUser, userController.getUserLikes)
router.get('/users/:id/replied_tweets', authenticated, authenticatedUser, userController.getRepliedTweets)
router.get('/users/:id/tweets', authenticated, authenticatedUser, userController.getUserTweets)
router.put('/users/:id/setting', authenticated, authenticatedUser, userController.putUserSetting)
router.get('/users/:id', authenticated, authenticatedUser, userController.getUser)
router.put('/users/:id', upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'background', maxCount: 1 }
]), authenticated, authenticatedUser, userController.putUser)

router.get('/tweets/following', authenticated, authenticatedUser, tweetController.getTweetFollowing)
router.post('/tweets/:id/unlike', authenticated, authenticatedUser, tweetController.removeLike)
router.post('/tweets/:id/like', authenticated, authenticatedUser, tweetController.addLike)
router.get('/tweets/:tweet_id/replies', authenticated, authenticatedUser, tweetController.getReplies)
router.post('/tweets/:tweet_id/replies', authenticated, authenticatedUser, tweetController.replyTweet)
router.get('/tweets/:tweet_id', authenticated, authenticatedUser, tweetController.getTweet)
router.get('/tweets', authenticated, authenticatedUser, tweetController.getTweets)
router.post('/tweets', authenticated, authenticatedUser, tweetController.postTweets)

router.use('/', apiErrorHandler)

module.exports = router
