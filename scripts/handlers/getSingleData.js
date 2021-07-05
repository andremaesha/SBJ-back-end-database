const getSingleData = async (req, h) => {
    const id = req.params.id;
    const ObjectID = req.mongo.ObjectID;

    const item = await req.mongo.db.collection("items").findOne(
        {
            _id: new ObjectID(id),
        },
        {
            projection: {
                name: 1,
                imageUrl: 1,
                category: 1,
                description: 1,
                insertedAt: 1,
            },
        }
    );

    return item;
};

module.exports = getSingleData;
