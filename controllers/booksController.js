const pool = require('../db');

const getAllBooks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const addBook = async (req, res) => {
  try {
    const { title, author, description, category, cover_url, publishedat, isactive, read } = req.body;
    const result = await pool.query(
      'INSERT INTO books (title, author, description, category, cover_url, publishedat, isactive, read) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [title, author, description, category, cover_url, publishedat, isactive, read]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, description, category, cover_url, publishedat, isactive, read } = req.body;
    const result = await pool.query(
      'UPDATE books SET title = $1, author = $2, description = $3, category = $4, cover_url = $5, publishedat = $6, isactive = $7, read = $8 WHERE id = $9 RETURNING *',
      [title, author, description, category, cover_url, publishedat, isactive, read, id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const updateBookDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, description, category, cover_url, publishedat, isactive, read } = req.body;
    const result = await pool.query(
      'UPDATE books SET title = COALESCE($1, title), author = COALESCE($2, author), description = COALESCE($3, description), category = COALESCE($4, category), cover_url = COALESCE($5, cover_url), publishedat = COALESCE($6, publishedat), isactive = COALESCE($7, isactive), read = COALESCE($8, read) WHERE id = $9 RETURNING *',
      [title, author, description, category, cover_url, publishedat, isactive, read, id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  updateBookDetails,
  deleteBook,
};