const Data = require("../../model/data");

const getCount = async (req, res) => {
  try {
    const key = req.query.key;
    console.log(key)
    if (!key) 
      return res.status(400).json({ error: "Key parameter is required" });

    const result = await Data.aggregate([
      { $group: { _id: `$${key}`, count: { $sum: 1 } } },
      { $project: { _id: 0, [key]: "$_id", count: 1 } },
    ]);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCount;
