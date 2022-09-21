import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send({"code":50008,"message":"Bad token","data":null});
});


router.get("/api", (req, res) => {
  res.send({"code":50008,"message":"Bad token","data":null});
});


router.get("/api/:user", (req, res) => {
  res.send({"code":50008,"message":"Bad token","data":null});
});


router.get("/api/:user/:prefile", (req, res) => {
  res.send({"code":1,"msg":"OK","time":1663749229,"data":{"username":"MDZ_txg4sr","invite_code":"124604","headpic":"\/static_new6\/headimg\/137.png","balance":"10.000","freeze_balance":"0.000","tel":"douglas96361230@gmail.com","today_unsettled":"0.0000","today_settled":"0.00","deal_count":0,"id":124604,"id_status":0,"real_name":"","id_card_num":"","txphone":"","disable_model":[],"task":"30","phone":null,"bankInfo":null,"share_url":"https:\/\/www.nassshop.com\/#\/login\/register?code=124604","otc_member_level":0}});
});



router.get("/api/:user/:prefile/:id", (req, res) => {
  const id = req.params.id;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
});

router.post("/", (req, res) => {
  const user = req.body;

  const Id = uuidv4();
  const UserId = { ...user, id: Id };

  users.push(UserId);
  res.send(`User with the name ${user.firstName} added!`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  users = users.filter((user) => user.id != id);

  res.send(`User with the id ${id} deleted.`);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, city } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (city) user.city = city;

  res.send(`User with the id ${id} has been changed!`);
});
export default router;
                        