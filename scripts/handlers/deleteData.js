const deleteData = async (req, h) => {
    const id = req.params.id;
    const ObjectID = req.mongo.ObjectID;

    const status = await req.mongo.db.collection("items").deleteOne({
        _id: ObjectID(id),
    });
    if (!!status) {
        const response = h.response({
            status: "success",
            statusCode: 200,
            message: "Success Delete Data From Database",
            process_response: status.result.ok === 1 ? "success" : null,
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: "fail",
        statusCode: 500,
        message: "failed delete Data from Database",
    });
    response.code(500);
    return response;
};

module.exports = deleteData;
