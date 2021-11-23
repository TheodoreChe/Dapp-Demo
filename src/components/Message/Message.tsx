import { FC, ReactElement } from 'react'

type Props = {
  children: ReactElement
}

export const Message: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export const MetamaskMessage: FC = () => {
  return (
    <Message>
      <>
        You need to{' '}
        <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
          install Metamask
        </a>
        , a virtual Ethereum wallet, in your browser.
      </>
    </Message>
  )
}
