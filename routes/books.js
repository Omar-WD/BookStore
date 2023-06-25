
const express = require('express');
const booksController = require('../controllers/booksController');

const booksRouter = express.Router();

booksRouter.get('/', booksController.getAllBooks);
booksRouter.get('/:id', booksController.getBookById);
booksRouter.post('/', booksController.addBook);
booksRouter.put('/:id', booksController.updateBook);
booksRouter.patch('/:id', booksController.updateBookDetails);
booksRouter.delete('/:id', booksController.deleteBook);

module.exports = booksRouter;




// const express = require('express');
// const pool =require("../db");
// const { rows } = require('pg/lib/defaults');

// const booksRouter = express.Router();

// ////////////////////////////Getting all Books (GET)//////////////////////////////
// booksRouter.get('/', async (req, res) => {
//     try { 
//         const result = await pool.query("select * from books")

//         res.status(200)
//         res.json(result.rows)

//     } catch (error) {
//         res.end("Some thing is wrong")
//     }
// });

// ////////////////////////////Getting Books by ID (GET)//////////////////////////////
// booksRouter.get('/:id', async (req, res) => {
//     try { 
//         const ID=req.params.id 
//         const result = await pool.query(`select * from books where id=${ID}`)
        
//         res.status(200)
//         res.json(result.rows)
//     } catch (error) {
//         res.end("Some thing is wrong")
//     }
// });


// ////////////////////////////Add Books (POST)//////////////////////////////
// booksRouter.post('/', async (req, res) => {
//     try { 
//       const { title, author, description, category, cover_url, publishedat, isactive, read } = req.body;
//       const {rows,rowCount} = await pool.query(
//         `INSERT INTO books (title, author, description, category, cover_url, publishedat, isactive, read) 
//          VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
//          RETURNING *`,
//         [title, author, description, category, cover_url, publishedat, isactive, read]
//       );
//       res.status(200).json(rows[0]);
//     } catch (error) {
//       res.status(500).json({ error: "Something went wrong" });
//     }
// });


// ////////////////////////////Update Book by ID (PUT)//////////////////////////////
// booksRouter.put('/:id', async (req, res) => {
//   try { 
//       const ID=req.params.id 
//       const { title, author, description, category, cover_url, publishedat, isactive, read } = req.body;
      
//       const result = await pool.query(
//         `update books
//          set (title, author, description, category, cover_url, publishedat, isactive, read)
//          =($1, $2, $3, $4, $5, $6, $7, $8)
//          where id=${ID} RETURNING * `,
//         [title, author, description, category, cover_url, publishedat, isactive, read])
      
//       res.status(200)
//       res.json(result.rows)
//   } catch (error) {
//       res.end("Some thing is wrong")
//   }
// });

// /////////////////////Update specific value in Book by ID (PATCH)//////////////////////
// booksRouter.patch('/:id', async (req, res) => {
//   try {
//     const ID = req.params.id;
//     const { title, author, description, category, cover_url, publishedat, isactive, read } = req.body;

//     const result = await pool.query(
//       `UPDATE books
//        SET title = COALESCE($1, title),
//            author = COALESCE($2, author),
//            description = COALESCE($3, description),
//            category = COALESCE($4, category),
//            cover_url = COALESCE($5, cover_url),
//            publishedat = COALESCE($6, publishedat),
//            isactive = COALESCE($7, isactive),
//            read = COALESCE($8, read)
//        WHERE id = $9
//        RETURNING *`,
//       [title, author, description, category, cover_url, publishedat, isactive, read, ID]
//     );

//     res.status(200);
//     res.json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });


//  ////////////////////////////Delete Book by ID (DELETE)//////////////////////////////
//  booksRouter.delete('/:id', async (req, res) => {
//   try { 
//       const ID=req.params.id 
      
//       const result = await pool.query(
//         `delete from books
//          where id=${ID} RETURNING * `)

//       res.status(200)
//       res.json(result.rows)
//   } catch (error) {
//       res.end("Some thing is wrong")
//   }
// });



// module.exports = booksRouter