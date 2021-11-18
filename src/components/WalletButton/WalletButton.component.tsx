import { FC, useContext } from 'react'
import { WalletContext } from '../../state'
import styles from './WalletButton.module.scss'
import { connectWallet } from '../../lib'

export const WalletButtonComponent: FC = () => {
  const { walletAddress, setWalletAddress } = useContext(WalletContext)

  const connectWalletPressed = async () => {
    const address = await connectWallet()
    setWalletAddress(address)
  }

  return (
    <button onClick={connectWalletPressed} className={styles.button}>
      {walletAddress && walletAddress.length > 0 ? (
        'Connected: ' + String(walletAddress).substring(0, 6) + '...' + String(walletAddress).substring(38)
      ) : (
        <span>Connect Wallet</span>
      )}
    </button>
  )
}
