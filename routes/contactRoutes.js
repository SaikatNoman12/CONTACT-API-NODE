import express from "express";
import { createContact, deleteContact, getAllContacts, getSingleContact, updateContact } from "../controllers/contactControllers.js";
 
// constant variable
const router = express.Router();

/** 
 * route longhand & bad-practice
 * @get method => router.route("/").get(getAllContacts)
 * @post method => router.route("/").get(getAllContacts)
 * @put method => router.route("/:id").put(updateContact);
 * @delete method => router.route("/:id").delete(deleteContact); 
*/

/** 
 * route shorthand & best-practice
 * @get & @post method
 * @put & @delete method
*/
router.route("/").get(getAllContacts).post(createContact);

router.route("/:id").get(getSingleContact).put(updateContact).delete(deleteContact);

export default router;