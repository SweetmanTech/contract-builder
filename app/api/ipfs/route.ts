import saveFile from '@/lib/ipfs/saveFile'

export async function POST(request: Request) {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  data.append('file', file)
  data.append('pinataMetadata', JSON.stringify({ name: 'File to upload' }))

  const cid = await saveFile(data)

  return Response.json({ cid }, { status: 200 })
}
