const booksService = require('../services/books.service');
const authService = require('../services/auth.service');
const userService = require('../services/user.service');

const signin = async (req, res, next) => {
    try {
        const { email } = req.body;

        const user = await booksService.findOne({ email });

        const accessToken = await authService.signAccessToken(user);

        res.cookie("access_token", accessToken, { httpOnly: true })
            .status(201)
            .json({
                status: 201,
                data: { accessToken },
            });
    } catch (err) {
        next(err);
    }
};

const signout = async (req, res, next) => {
    try {
        res.clearCookie("access_token")
            .status(200)
            .json({
                status: 200,
            });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    signin,
    signout,
};