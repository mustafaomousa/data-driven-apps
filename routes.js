const express = require('express');
const router = express.Router();
const db = require('./db/models');
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/', asyncHandler(async (req, res, next) => {
    const books = await db.Book.findAll({ order: [['title', 'ASC']] });
    res.render('book-list', { title: 'Books', books });
}));

module.exports = router;