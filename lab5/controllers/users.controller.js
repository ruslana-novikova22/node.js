const userService = require("../services/users.service");
const authService = require("../services/auth.service");
const createError = require("http-errors");
const bcrypt = require("bcrypt");

async function createUser(req, res, next) {
  try {
    const _id = await userService.create({
      ...req.body,
      password: await bcrypt.hash(req.body.password, await bcrypt.genSalt(10)),
    });

    res.status(201).json({
      status: 201,
      data: { _id },
    });
  } catch (err) {
    next(createError.InternalServerError(err.message));
  }
}

async function getUsers(req, res, next) {
  try {
    res.status(200).json({
      status: 200,
      data: await userService.find({}),
    });
  } catch (err) {
    next(createError.InternalServerError(err.message));
  }
}

async function getUser(req, res, next) {
  try {
    const { userId } = req.params;
    const user = await userService.findById(userId);

    if (!user) {
      return res.status(404).json({
        status: 404,
        error: {
          message: "User not found.",
        },
      });
    }

    res.status(200).json({
      status: 200,
      data: user,
    });
  } catch (err) {
    next(createError.InternalServerError(err.message));
  }
}

async function updateUser(req, res, next) {
  try {
    const { userId } = req.params;
    let id = await authService.verifyAccessToken(req.headers['x-auth']);
    console.log(id);
    console.log(userId);
    if(id != userId){
        throw createError.Unauthorized('You have no access to this operation');
    }
    const userData = req.body;
    await userService.findByIdAndUpdate(userId, userData);

    res.status(200).json({
      status: 200,
    });
  } catch (err) {
    next(createError.InternalServerError(err.message));
  }
}

async function deleteUser(req, res, next) {
  try {
    const { userId } = req.params;

    if (!req.auth.canDelete) {
      throw createError.Forbidden('Can`t delete user')
    } 

    await userService.findByIdAndDelete(userId);

    res.status(204).json({
      status: 204,
    });
  } catch (err) {
    next(createError.InternalServerError(err.message));
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};