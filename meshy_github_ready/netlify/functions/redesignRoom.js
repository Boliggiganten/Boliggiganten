exports.handler = async function(event, context) {
  try {
    const body = JSON.parse(event.body || '{}');
    return { statusCode: 200, body: JSON.stringify({ success:true, redesignedImageUrl: null, external: {} }) };
  } catch(err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
