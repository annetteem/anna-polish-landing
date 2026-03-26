export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      event_name = 'Lead',
      event_id,
      event_source_url,
      user_data = {},
      custom_data = {},
    } = req.body || {}

    const pixelId = process.env.META_PIXEL_ID
    const accessToken = process.env.META_ACCESS_TOKEN
    const testEventCode = process.env.META_TEST_EVENT_CODE

    if (!pixelId || !accessToken) {
      return res.status(500).json({
        error: 'META_PIXEL_ID or META_ACCESS_TOKEN is missing',
      })
    }

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_id,
          event_source_url,
          user_data,
          custom_data,
        },
      ],
    }

    if (testEventCode) {
      payload.test_event_code = testEventCode
    }

    const response = await fetch(
      `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    const result = await response.json()

    if (!response.ok) {
      return res.status(response.status).json(result)
    }

    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({
      error: 'Internal server error',
      details: error.message,
    })
  }
}
