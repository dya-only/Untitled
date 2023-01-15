// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {

  const params = req.body

  if (req.method === 'POST') {
    // Process a GET request
    res.status(200).json({ name: params.name })
  } else {
    // Handle any other HTTP method
  }
}
