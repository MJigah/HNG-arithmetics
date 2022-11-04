const express = require('express')
const { arithmeticHandler } = require('../controller/arithmeticController')
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *      User:
 *        type: object
 *        required:
 *          - operation_type
 *          - x
 *          - y
 *        properties:
 *          operation_type:
 *            type: String
 *            description: The First name of the user
 *          x:
 *            type: Number
 *            description: The Last name of the user
 *          y:
 *            type: Number
 *            description: The Email of the user
 *        example:
 *          operation_type: "String"
 *          x: 1
 *          y: 4
 */


//GET: seed to db
// router.get(
//     "/seed",
//     (async (req, res) => {
//       const reviews = await User.insertMany(mealDb.user);
//       // await Vendor.deleteMany()
//       res.send(reviews);
//     })
//   );

/**
 * @swagger
 * '/api/calculate':
 *  post:
 *   summary: Calculate arithmetic
 *   tags: [User]
 *   requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/User'
 *   responses:
 *     200:
 *      description: The Users are displayed successfully
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *     404:
 *      description: Not Found
 *     500:
 *      description: Server Error
 *
 */
router.post("/", arithmeticHandler)

module.exports = router;