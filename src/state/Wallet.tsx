import { createContext, FC, ReactElement, useMemo, useState } from 'react'

export type WalletContextType = {
  walletAddress?: string
  setWalletAddress: Function
}

type WalletProviderProps = {
  children: ReactElement
}

export const WalletContext = createContext<WalletContextType>({
  walletAddress: undefined,
  setWalletAddress: () => {},
})

export const WalletProvider: FC<WalletProviderProps> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined)
  const value = useMemo(() => ({ walletAddress, setWalletAddress }), [walletAddress])

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}
