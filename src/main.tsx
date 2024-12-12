import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { IdentityKitProvider, IdentityKitTheme } from '@nfid/identitykit/react'
import {
  IdentityKitAuthType,
  NFIDW,
  Plug,
  InternetIdentity,
} from "@nfid/identitykit"

import { AuthProvider } from '@/components/nfid-auth'
import Login from '@/pages/login'
import Home from '@/pages/home'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Home />
  },
])

const signers = [Plug, NFIDW, InternetIdentity]
const postCanisterID = process.env.CANISTER_ID_POST_CANISTER
const indexCanisterID = process.env.CANISTER_ID_INDEX_CANISTER
const ledgerCanisterID = process.env.CANISTER_ID_ICP_LEDGER_CANISTER
const signerClientOptions = {
  targets: [indexCanisterID!, postCanisterID!, ledgerCanisterID!],
  maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000), // 1 week in nanoseconds
  // idleOptions: {
  //   idleTimeout: 4 * 60 * 60 * 1000, // 4 hours in milliseconds
  //   disableIdle: false, // Enable logout on idle timeout
  // },
  // keyType: 'Ed25519', // Use Ed25519 key type for compatibility
  // allowInternetIdentityPinAuthentication: true, // Enable PIN authentication
}

createRoot(document.getElementById('root')!).render(
  <IdentityKitProvider
    signers={signers}
    theme={IdentityKitTheme.DARK}
    authType={IdentityKitAuthType.DELEGATION}
    signerClientOptions={signerClientOptions}
  >
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </IdentityKitProvider>
)
