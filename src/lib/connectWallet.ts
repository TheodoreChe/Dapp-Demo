export const connectWallet = async (): Promise<string | undefined> => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      return addressArray[0]
    } catch (err) {
      return
    }
  }
}
