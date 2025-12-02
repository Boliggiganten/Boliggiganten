exports.handler = async function(event, context) {
  try {
    const body = JSON.parse(event.body || '{}');
    const { description = '', materials = [], footprint_m2 = 120, floors = 1, mode = 'preview' } = body;
    const prompt = `Design a ${floors}-floor house, ${footprint_m2} m2. Style: ${description}. Materials: ${materials.join(', ')}`;
    const resp = await fetch('https://api.meshy.ai/v2/text-to-3d', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + (process.env.MESHY_API_KEY || ''), 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, mode })
    });
    const data = await resp.json().catch(()=>({ status: resp.status }));
    const taskId = data?.task_id || data?.taskId || data?.id || null;
    return { statusCode: 200, body: JSON.stringify({ success: true, taskId, externalResponse: data }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
