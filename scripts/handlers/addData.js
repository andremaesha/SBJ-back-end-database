const addData = async (req, h) => {
    const { name, imageUrl, category, description } = req.payload;
    const insertedAt = new Date().toISOString();

    const data = {
        name,
        imageUrl,
        category,
        description,
        insertedAt,
    };

    if (name !== undefined && name !== null && name !== "") {
        if (imageUrl !== undefined && imageUrl !== null && imageUrl !== "") {
            if (
                category !== undefined &&
                category !== null &&
                category !== ""
            ) {
                if (
                    description !== undefined &&
                    description !== null &&
                    description !== ""
                ) {
                    const DATA = await req.mongo.db
                        .collection("items")
                        .insertOne(data);

                    const response = h.response({
                        status: "success",
                        statusCode: 201,
                        message: "Data success inserted to Database",
                        process_response:
                            DATA.result.ok === 1 ? "success" : null,
                    });
                    response.code(201);
                    return response;
                }
            }
        }
    }
    const response = h.response({
        status: "error",
        statusCode: 500,
        message: "failed insert data to Database",
    });
    response.code(500);
    return response;
};

module.exports = addData;
