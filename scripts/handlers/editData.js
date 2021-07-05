const editData = async (req, h) => {
    const id = req.params.id;
    const ObjectID = req.mongo.ObjectID;
    const payload = req.payload;

    if (!!payload) {
        const DATA = await req.mongo.db.collection("items").updateOne(
            {
                _id: ObjectID(id),
            },
            {
                $set: payload,
            }
        );
        const response = h.response({
            status: "success",
            statusCode: 200,
            message: "success Update Data",
            process_response: DATA.result.ok === 1 ? "success" : null,
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: "failed",
        statusCode: 400,
        message: "failed update to Database",
    });
    response.code(400);
    return response;
};

module.exports = editData;
