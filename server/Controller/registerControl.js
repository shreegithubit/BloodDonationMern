const { LoginModel } = require("../Model_Schema/loginSchema");

const handleCreateUser = async (req, res) => {
  const userData = req.body;
  if (!userData.email || !userData.username || !userData.password) {
    return res.json({ msg: "all fields are required", success: false });
  }
  const result = await LoginModel.find({ email: userData.email });
  if (result?.length) {
    return res.json({ msg: "user is exist please login", sucess: false });
  }
  await LoginModel.create({
    email: userData.email,
    username: userData.username,
    password: userData.password,
  });

  return res.json({ msg: "user created sucessfully", sucess: true });
};
const handleLogInUser = async (req, res) => {
  const userData = req.body;
  if (!userData.email || !userData.password) {
    return res.json({ msg: "all fields are required", success: false });
  }
  const result = await LoginModel.find({ email: userData.email });
  console.log("resultrt", result);
  if (!result.length) {
    return res.json({ msg: "Invalid Credential", success: false });
  }
  if (result[0].password === userData.password) {
    return res.json({ msg: "user found sucessfully", sucess: true });
  }
  return res.json({ msg: "Password not valid", sucess: false });
};

module.exports = { handleCreateUser, handleLogInUser };
