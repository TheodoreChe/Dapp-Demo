import { FC, useContext } from 'react'
import { WalletContext } from '../../state'
import { connectWallet } from '../../lib'

type Props = {
  className?: string
}

export const WalletButtonComponent: FC<Props> = ({ className }) => {
  const { walletAddress, setWalletAddress } = useContext(WalletContext)

  const connectWalletPressed = async () => {
    const address = await connectWallet()
    setWalletAddress(address)
  }

  return (
    <button onClick={connectWalletPressed} className={className}>
      {walletAddress && walletAddress.length > 0 ? (
        'Connected: ' + String(walletAddress).substring(0, 6) + '...' + String(walletAddress).substring(38)
      ) : (
        <span>🦊 Connect Wallet</span>
      )}
    </button>
  )
}
