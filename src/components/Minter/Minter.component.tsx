import { FC, useState } from 'react'
import { MinterForm } from './MinterForm.component'
import styles from './Minter.module.scss'
import { WalletButtonComponent } from '../WalletButton/WalletButton.component'

export const MinterComponent: FC = () => {
  const [status, setStatus] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [url, setURL] = useState('')

  const connectWalletPressed = async () => {
    //TODO: implement
  }

  const onMintPressed = async () => {
    //TODO: implement
  }

  return (
    <div className={styles.wrapper}>
      <WalletButtonComponent />

      <br />
      <h1>🧙‍♂️ Alchemy NFT Minter</h1>
      <p>Simply add your asset's link, name, and description, then press "Mint."</p>

      <MinterForm setDescription={setDescription} setName={setName} setURL={setURL} />

      <button className={styles.button} onClick={onMintPressed}>
        Mint NFT
      </button>
    </div>
  )
}
