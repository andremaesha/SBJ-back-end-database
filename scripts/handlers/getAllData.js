const getAllData = async (req, h) => {
    const offset = Number(req.query.offset) || 0;
    const items = await req.mongo.db
        .collection("items")
        .find({})
        .sort({ metacritic: -1 })
        .skip(offset)
        .limit(20)
        .toArray();

    if (!!items) {
        const response = h.response({
            status: "success",
            statusCode: 200,
            data: {
                items,
            },
        });
        response.code(200);
        return response;
    } else {
        const response = h.response({
            status: "fail",
            statusCode: 404,
            message: "can't found data",
        });
        response.code(404);
        return response;
    }
};

module.exports = getAllData;
