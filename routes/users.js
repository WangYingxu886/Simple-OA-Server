//用户路由
const router = require('koa-router')()
const User = require('../models/userSchema')
const util = require('../utils/util')

router.prefix('/users')

router.post('/login', async function (ctx, next) {
  try {
    const { userName, userPwd } = ctx.request.body
    const res = await User.findOne({ userName, userPwd })
    if (res) {
      ctx.body = util.success(res,"登录成功！")
    }else {
      ctx.body = util.fail('账号或者密码不正确')
    }
  } catch (error) {
    ctx.body = util.fail(error)
  }
})

module.exports = router
