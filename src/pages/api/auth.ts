// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import base64 from 'base-64'
import { useState } from 'react'

type Data = {
  message: string
  id: string
  pw: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
  ) {

  const params = req.body
  // const [acc, setAcc] = useState({
  //   id: '',
  //   pw: ''
  // })
  let acc = {
    id: '',
    pw: ''
  }

  if (req.method === 'POST') {
    // Process a POST request

    acc.id = base64.decode(params.id)
    acc.pw = base64.decode(params.pw)

    // res.status(200).json({ id: acc.id, pw: acc.pw })
    res.status(200).json({ message: 'successful', id: acc.id, pw: acc.pw })
  } else {
    // Handle any other HTTP method
  }
}