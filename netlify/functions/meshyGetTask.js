exports.handler = async function(event, context) {
  try {
    const q = event.queryStringParameters || {};
    const taskId = q.id;
    if (!taskId) return { statusCode: 400, body: JSON.stringify({ error: 'Missing id query param' }) };
    const resp = await fetch(`https://api.meshy.ai/v2/text-to-3d/${encodeURIComponent(taskId)}`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + (process.env.MESHY_API_KEY || '') }
    });
    const data = await resp.json().catch(()=>({ status: resp.status }));
    return { statusCode: 200, body: JSON.stringify({ success: true, task: data }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
