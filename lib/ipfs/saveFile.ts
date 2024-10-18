const saveFile = async (data: any) => {
  try {
    const response = await fetch(
      'https://api.pinata.cloud/pinning/pinFileToIPFS',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
        body: data,
      },
    )
    const { IpfsHash } = await response.json()
    return IpfsHash
  } catch (error) {
    console.error(error)
  }
}

export default saveFile
