const Data = require("../../model/data");

const getSet = async (req, res) => {
  try {
    const key = req.query.key;

    if (!key)
      return res.status(400).json({ error: "Key parameter is required" });

    const uniqueValues = await Data.distinct(key);

    res.status(200).json(uniqueValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getSet;
