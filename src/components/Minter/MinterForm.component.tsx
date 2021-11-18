import { FC } from 'react'

type Props = {
  setDescription: (value: string) => void
  setName: (value: string) => void
  setURL: (value: string) => void
}

export const MinterForm: FC<Props> = ({ setDescription, setName, setURL }) => {
  return (
    <form>
      <h2>🖼 Link to asset: </h2>
      <input
        type="text"
        placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
        onChange={(event) => setURL(event.target.value)}
      />
      <h2>🤔 Name: </h2>
      <input type="text" placeholder="e.g. My first NFT!" onChange={(event) => setName(event.target.value)} />
      <h2>✍️ Description: </h2>
      <input
        type="text"
        placeholder="e.g. Even cooler than cryptokitties ;)"
        onChange={(event) => setDescription(event.target.value)}
      />
    </form>
  )
}
