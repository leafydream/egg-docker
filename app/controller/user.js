'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('122324234324')
    // ctx.body = 'hi, egg';

    this.ctx.body = {
        name: 'egg',
        category: 'framework',
        language: 'Node.js',
      };
  }
}

module.exports = UserController;
