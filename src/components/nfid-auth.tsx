import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { Actor, HttpAgent } from '@dfinity/agent'
import {
  useBalance,
  useIdentity,
  useAccounts,
  useDelegationType,
  useIsInitializing,
  useAuth,
  useAgent
} from '@nfid/identitykit/react'

import { createActor } from '@/declarations/index_canister'
import { index_canister } from '@/declarations/index_canister'
import { idlFactory as ledgerIDL } from '@/declarations/icp_ledger_canister'

const canisterID = process.env.CANISTER_ID_INDEX_CANISTER!
const AuthContext = createContext({})

export const useAuthClient = () => {
  const { connect, disconnect, isConnecting, user } = useAuth()
  const { balance, fetchBalance } = useBalance()
  const delegationType = useDelegationType()
  const isInitializing = useIsInitializing()
  const identity = useIdentity()
  const accounts = useAccounts()
  const agent = useAgent()

  const [backendActor, setBackendActor] = useState<typeof index_canister>()
  const [existedUser, setExistedUser] = useState<any>()

  console.log('user', user?.principal.toText())
  console.log('icp balance', balance)

  useEffect(() => {
    if (!user) return

    const actor = createActor(
      process.env.CANISTER_ID_INDEX_CANISTER!,
      { agent }
    )

    setBackendActor(actor)
    setExistedUser(user)
  }, [user, agent])

  const onLogin = async () => {
    try {
      await connect()
      // const principal = identity?.getPrincipal()
    } catch (error) {
      console.error('ERR_LOGIN', error)
    }
  }

  const onLogout = async () => {
    try {
      await disconnect()
      setExistedUser(null)
    } catch (error) {
      console.error('ERR_LOGOUT', error)
    }
  }

  const createCustomActor = async (canisterId: string) => {
    try {
      console.log('Identity value before agent creation: ', identity)
      console.log('Creating actor for canister ID: ', canisterId)

      if (!identity) {
        console.error('Missing identity')
        return
      }

      const host = process.env.DFX_NETWORK === 'ic' ? 'https://ic0.app' : `http://127.0.0.1:4943`
      const agent = new HttpAgent({ identity, host })

      if (process.env.DFX_NETWORK !== 'ic') {
        await agent.fetchRootKey().catch(err => {
          console.warn('Unable to fetch root key. Check your local replica.', err)
        })
      }

      const ledgerActor = Actor.createActor(ledgerIDL, { agent, canisterId })
      console.log('Created ledger actor: ', ledgerActor)
      return ledgerActor
    } catch (error) {
      console.error('ERR_CREATE_LEDGER_ACTOR', error)
    }
  }

  const principal = user && user.principal ? user.principal.toText() : null

  return {
    isInitializing,
    isAuthenticated: !!existedUser,
    isConnecting,
    accounts,
    identity,
    backendActor,
    delegationType,
    principal,
    createCustomActor,
    login: onLogin,
    logout: onLogout,
    fetchBalance,
    actor: createActor(canisterID, {
      agentOptions: { identity, verifyQuerySignatures: false }
    })
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuthClient()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuths = () => useContext(AuthContext)
