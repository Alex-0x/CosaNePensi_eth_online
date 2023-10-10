'use client'
import "../assets/style/address.css"
import { useAccount, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { data: ensName } = useEnsName({ address })

  return (
    <div className='address'>
      {ensName ?? address}
      {ensName ? ` (${address})` : null}
    </div>
  )
}
