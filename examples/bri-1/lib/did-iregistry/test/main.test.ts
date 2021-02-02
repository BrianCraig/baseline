import { IIdentifier } from '@veramo/core';
import { agent, memKeyStore } from '../src/setup'
import { createDid, getDidInformation } from '../src/index'

describe('Test pre-established address', () => {
  it('creates correct DID document from pre-established address', async () => {
    const expectedDID = `TODO`;
    expect(await createDid(
      async () => { },
      "0xd58d382d9803226ec5c88a37f9b224d5146067e0",
      'alice-did-test.vercel.app',
      'http://localhost:1234'
    )).toBe(expectedDID)
  })

  it('Gets correct info from Domain', async () => {
    expect(await getDidInformation('alice-did-test.vercel.app'))
      .toBe({messengerUri: 'http://localhost:1234', address: "0xd58d382d9803226ec5c88a37f9b224d5146067e0"})
  })
})
