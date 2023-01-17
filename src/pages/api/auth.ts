// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import base64 from 'base-64'
import { useState } from 'react'

type Data = {
  message: string
  error: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {

  const params = req.body
  const [acc, setAcc] = useState({
    id: '',
    pw: ''
  })

  if (req.method === 'POST') {
    // Process a POST request

    // setAcc({
    //   ...acc,
    //   [id]: params.id,
    //   [pw]: params.pw
    // })

    // if (params.)
    res.status(200).json({ message: 'success', error: false })
  } else {
    // Handle any other HTTP method
  }
}