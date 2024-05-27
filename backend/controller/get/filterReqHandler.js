const Data = require("../../model/data");

const getFilterData = async (req, res) => {
  try {
    const {
      end_year,
      topic,
      sector,
      region,
      pestel,
      source,
      country,
      likelihood,
      page = 1,
      limit = 10,
      sortBy = "likelihood",
      sortOrder = 0,
    } = req.query;

    const filter = {
      ...(end_year && { end_year }),
      ...(topic && { topic }),
      ...(sector && { sector }),
      ...(region && { region }),
      ...(pestel && { pestel }),
      ...(source && { source }),
      ...(country && { country }),
      ...(likelihood && { likelihood: { $gte: likelihood } }),
    };

    let sort = {};
    if (sortBy) sort[sortBy] = sortOrder === 1 ? 1 : -1;

    const data = await Data.find(filter)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getFilterData;
