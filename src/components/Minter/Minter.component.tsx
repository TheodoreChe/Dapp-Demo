import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { WalletButtonComponent } from '../WalletButton/WalletButton.component'
import { MinterForm } from './MinterForm.component'
import styles from './Minter.module.scss'

export const MinterComponent: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  console.log(errors)

  const onSubmit = (data: { Url: string; Name: string; Description: string }) => {
    // onMintPressed
    console.log('data', data)
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>NFT Minter</h1>
        <p>Simply add your asset's link, name, and description, then press "Mint."</p>

        <MinterForm register={register} />

        <div className={styles.buttonsSection}>
          <input type="submit" className={styles.mintButton} value="Mint NFT" />
          <WalletButtonComponent className={styles.walletButton} />
        </div>
      </form>
    </div>
  )
}
