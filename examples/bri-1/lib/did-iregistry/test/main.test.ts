import { createDid, getDidInformation } from '../src/index'

describe('DID package tests', () => {
  let didResult;
  it('creates a simple DID', async () => {
    const didPromise = createDid(async () => { },
      null,
      'domain-x',
      [])
    didResult = JSON.parse(await didPromise)
    expect(didResult).toHaveProperty('@context', 'https://identity.foundation/.well-known/contexts/did-configuration-v0.0.jsonld')
    expect(didResult.linked_dids).toHaveLength(1);
    console.log(JSON.stringify(didResult))
    // TODO jwt read and match props
  })

  /*

  Example Did with no address response

  {
    "@context": "https://identity.foundation/.well-known/contexts/did-configuration-v0.0.jsonld",
    "linked_dids": [
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJvcmlnaW4iOiJiYXNlbGluZS1hbGljZS1kaWQudmVyY2VsLmFwcCJ9LCJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vaWRlbnRpdHkuZm91bmRhdGlvbi8ud2VsbC1rbm93bi9jb250ZXh0cy9kaWQtY29uZmlndXJhdGlvbi12MC4wLmpzb25sZCJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRG9tYWluTGlua2FnZUNyZWRlbnRpYWwiXX0sInN1YiI6ImRpZDpldGhyOnJvcHN0ZW46MHgyZTZhNzczZTBiMmY3YzU4NTZhODk4MGUxODk1MjA1YzllYjQxZTFmIiwibmJmIjoxNjEzODEyNDU4LCJpc3MiOiJkaWQ6ZXRocjpyb3BzdGVuOjB4MmU2YTc3M2UwYjJmN2M1ODU2YTg5ODBlMTg5NTIwNWM5ZWI0MWUxZiJ9.qOMMbu2OAxi_ZrtFKQ6lrYoq_WAYOfEi0S0RC1kwpoTCqMoja77VgaKjmYQedg-BF1rpvcAn2POwTxlBBDcG0Q"
    ]
  }

  JWT:
  {
    "vc": {
      "credentialSubject": {
        "origin": "baseline-alice-did.vercel.app"
      },
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://identity.foundation/.well-known/contexts/did-configuration-v0.0.jsonld"
      ],
      "type": [
        "VerifiableCredential",
        "DomainLinkageCredential"
      ]
    },
    "sub": "did:ethr:ropsten:0x2e6a773e0b2f7c5856a8980e1895205c9eb41e1f",
    "nbf": 1613812458,
    "iss": "did:ethr:ropsten:0x2e6a773e0b2f7c5856a8980e1895205c9eb41e1f"
  }

  */

  it('validates the DID', async () => {
    // TODO mock domain-x and validate (use from daf-plugin-did-config)
  })

  it('creates correct DID document from pre-established address', async () => {
    const expectedDID = `TODO`;
    const didPromise = createDid(async () => { },
      null,
      'domain-x:8081',
      [{
        serviceEndpoint: "http://x/",
        slug: "baseline-message-endpoint",
        type: "BaselineProtocolMessageEndpoint"
      },
      {
        serviceEndpoint: "0x672efbc0b0445522d3c14a9d1889423448ea43e0",
        slug: "baseline-address",
        type: "BaselineProtocolAddress"
      }]
    )

    didResult = JSON.parse(await didPromise)
    console.log(didResult);
  })

  it('Gets correct info from Domain', async () => {
    expect(await getDidInformation('alice-did-test.vercel.app'))
      .toBe({ messengerUri: 'http://localhost:1234', address: "0xd58d382d9803226ec5c88a37f9b224d5146067e0" })
  })
})
