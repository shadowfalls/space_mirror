// const { getConnection } = require('../../core/utils');
const Response = require('../../models/Response');

exports.createArticle = async () => {
  try {
    // const db = await getConnection();
    // await db.collection('category').insertOne({ name: name });
    // return new Response(false, 'Succesfully added category', {});
  } catch (error) {
    return new Response(true, 'Cannot create category', {}, error);
  }
};
