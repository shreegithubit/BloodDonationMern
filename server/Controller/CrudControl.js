const { donerDetail } = require("../Model_Schema/CrudSchema");

const handleGetdata = async (req, res) => {
  const getdata = await donerDetail.find({});
  if (getdata) {
    return res.json({ msg: "Data found sucessfully", data: getdata });
  }
  return res.json({ msg: "Data Not found sucessfully", data: [] });
};
const handelCreatedata = async (req, res) => {
  const createdata = req.body;
  console.log("createdata", createdata);
  if (!createdata) {
    return res.json({ msg: "bad requiest", sucess: false });
  }
  if (
    !createdata.donorName ||
    !createdata.bloodGroup ||
    !createdata.donationDate ||
    !createdata.location ||
    !createdata.gender ||
    !createdata.email
  ) {
    return res.json({ msg: "All Field is required", sucess: false });
  }

  const result = await donerDetail.find({ email: createdata.email });
  if (result.length) {
    return res.json({ msg: " User is already present", sucess: false });
  }

  await donerDetail.create({
    name: createdata.donorName,
    bloodgroup: createdata.bloodGroup,
    date: createdata.donationDate,
    location: createdata.location,
    gender: createdata.gender,
    email: createdata.email,
  });
  return res.json({ msg: " data created sucessfully", sucess: true });
};

module.exports = { handleGetdata, handelCreatedata };
