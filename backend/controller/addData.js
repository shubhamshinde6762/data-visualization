const Data = require("../model/data");

exports.create = async (req, res) => {
  try {
    const arrOfData = req.body.arrOfData;
    if (!arrOfData || !arrOfData.length)
      return res.status(400).json({ message: "Invalid Data" });
    console.log(arrOfData)
    const createdData = await Data.insertMany(arrOfData);
    res.status(201).json({ createdData });

  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
