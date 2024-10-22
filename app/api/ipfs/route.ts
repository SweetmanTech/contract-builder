import saveFile from '@/lib/ipfs/saveFile'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const formData = await request.formData()

  const file = formData.get('file') as File

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const chunks = []
  const reader = file.stream().getReader()

  let done = false

  while (!done) {
    const { done: isDone, value } = await reader.read()

    done = isDone

    chunks.push(value)
  }

  const buffer = Buffer.concat(chunks.filter(Boolean) as Uint8Array[])

  const data = new FormData()

  data.append('file', new Blob([buffer]), file.name)
  data.append('pinataMetadata', JSON.stringify({ name: 'File to upload' }))

  const cid = await saveFile(data)

  return NextResponse.json({ cid }, { status: 200 })
}
