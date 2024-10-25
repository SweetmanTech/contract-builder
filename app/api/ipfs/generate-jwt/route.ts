import generatePinataJWT from '@/lib/ipfs/generatePinataJWT'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

export async function GET() {
  try {
    const data = await generatePinataJWT()
    return Response.json(data)
  } catch (e) {
    return Response.json({ message: e }, { status: 500 })
  }
}
