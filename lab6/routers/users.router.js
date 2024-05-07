const express = require('express');
const router = express.Router();

const controllers = require('../controllers/users.controller');
const middlewares = require('../middlewares/users.middleware');
const { authenticationCheck } = require('../middlewares/auth.middleware');

router.route('/')
    .post(middlewares.userCreationDataValidation, controllers.createUser);

router.route('/')
    .get(authenticationCheck, controllers.getUsers);

router.route('/:userId')
    .get(authenticationCheck, middlewares.userByIdValidation, controllers.getUser)
    .patch(authenticationCheck, middlewares.userByIdValidation, middlewares.userUpdateDataValidation, controllers.updateUser)
    .delete(authenticationCheck, middlewares.userByIdValidation, controllers.deleteUser);
router.route('/:userId/profilePicture')
    .put(middlewares.userByIdValidation, middlewares.userUploadProfilePicture, controllers.updateUserProfilePicture);

router.route('/upload')
    .post(middlewares.usersUpload, controllers.uploadUsers);
module.exports = router;