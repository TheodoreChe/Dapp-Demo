import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Minter.module.scss'

type Props = {
  register: Function
}

export const MinterForm: FC<Props> = ({ register }) => {
  return (
    <>
      <div className={styles.field}>
        <h2>🖼 Link to asset</h2>
        <input
          className={styles.input}
          autocomplete="off"
          type="text"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
          {...register('Url', {})}
        />
      </div>
      <div className={styles.field}>
        <h2>🤔 Name</h2>
        <input
          className={styles.input}
          autocomplete="off"
          type="text"
          placeholder="e.g. My NFT!"
          {...register('Name', {})}
        />
      </div>
      <div className={styles.field}>
        <h2>✍️ Description</h2>
        <input
          className={styles.input}
          autocomplete="off"
          type="text"
          placeholder="e.g. Even cooler than cryptokitties ;)"
          {...register('Description', {})}
        />
      </div>
    </>
  )
}
