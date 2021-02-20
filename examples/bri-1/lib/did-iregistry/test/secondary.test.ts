import { IIdentifier } from '@veramo/core';
import { agent, memKeyStore } from '../src/setup'

describe('DID tools', () => {
  let did: IIdentifier;

  it('generates a new agent', async () => {

    did = await agent.didManagerGetOrCreate();

    const c = agent.keyManagerGet({ kid: did.keys[0].kid })
    console.log(memKeyStore)

  })

  it('generates a did configuration', async () => {
    const b = await agent.didManagerGet({ did: "did:ethr:ropsten:0xd58d382d9803226ec5c88a37f9b224d5146067e0" })
    const c = await agent.resolveDid({ didUrl: "did:ethr:ropsten:0xd58d382d9803226ec5c88a37f9b224d5146067e0" })

  })

  /*it('adds a service', async () => {

    did = await agent.didManagerAddService({did: did.did, service: {id: `${did.did}#baseline-protocol`, type: "BaselineProtocolService01", serviceEndpoint: "http://localhost:7070"}});

    console.log(memKeyStore)
    
  })*/
  it('gets the correct info', async () => {
    //const t = agent.didManagerGet
  })
  //"0xd58d382d9803226ec5c88a37f9b224d5146067e0"
})
/*

{
  did: "did:ethr:ropsten:0xd58d382d9803226ec5c88a37f9b224d5146067e0",
  controllerKeyId: "0496e0de1f0efa8385b82d06c84028f962bb13b33d1f191e99c6e1c429c016dc191b7a5ff65850dee4a75243b543779c8729e853538fa2aadb98189fa7fad31d6f",
  provider: "did:ethr:ropsten",
  services: [
    {
      id: "did:ethr:ropsten:0xd58d382d9803226ec5c88a37f9b224d5146067e0#baseline-protocol",
      type: "BaselineProtocolService01",
      serviceEndpoint: "http://localhost:7070",
      description: null,
    },
  ],
  keys: [
    {
      kid: "0496e0de1f0efa8385b82d06c84028f962bb13b33d1f191e99c6e1c429c016dc191b7a5ff65850dee4a75243b543779c8729e853538fa2aadb98189fa7fad31d6f",
      type: "Secp256k1",
      kms: "local",
      publicKeyHex: "0496e0de1f0efa8385b82d06c84028f962bb13b33d1f191e99c6e1c429c016dc191b7a5ff65850dee4a75243b543779c8729e853538fa2aadb98189fa7fad31d6f",
    },
  ],
}

*/

/*

{
  "@context": "https://w3id.org/did/v1",
  id: "did:ethr:ropsten:0xd58d382d9803226ec5c88a37f9b224d5146067e0",
  publicKey: [
    {
      id: "did:ethr:ropsten:0xd58d382d9803226ec5c88a37f9b224d5146067e0#controller",
      type: "Secp256k1VerificationKey2018",
      controller: "did:ethr:ropsten:0xd58d382d9803226ec5c88a37f9b224d5146067e0",
      ethereumAddress: "0xd58d382d9803226ec5c88a37f9b224d5146067e0",
    },
  ],
  authentication: [
    {
      type: "Secp256k1SignatureAuthentication2018",
      publicKey: "did:ethr:ropsten:0xd58d382d9803226ec5c88a37f9b224d5146067e0#controller",
    },
  ],
  service: [
    {
      type: "BaselineProtocolService0",
      serviceEndpoint: "http://localhost:7070",
    },
  ],
}

*/

/*

{
  "@context": "https://identity.foundation/.well-known/contexts/did-configuration-v0.0.jsonld",
  "linked_dids": [
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJjcmVkZW50aWFsU3ViamVjdCI6eyJvcmlnaW4iOiJiYXNlbGluZS1hbGljZS1kaWQudmVyY2VsLmFwcCJ9LCJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vaWRlbnRpdHkuZm91bmRhdGlvbi8ud2VsbC1rbm93bi9jb250ZXh0cy9kaWQtY29uZmlndXJhdGlvbi12MC4wLmpzb25sZCJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRG9tYWluTGlua2FnZUNyZWRlbnRpYWwiXX0sInN1YiI6ImRpZDpldGhyOnJvcHN0ZW46MHhhYTM1MDRkNTNmOTI5M2ZlNTk2Y2FhMDI5MmYyMmEwMzI0NGZiZDE2IiwibmJmIjoxNjExNjU4OTQzLCJpc3MiOiJkaWQ6ZXRocjpyb3BzdGVuOjB4YWEzNTA0ZDUzZjkyOTNmZTU5NmNhYTAyOTJmMjJhMDMyNDRmYmQxNiJ9.w5a4dgrCZO3_nkl6Yv5KbqGqyrc57l7BouPaQV7yCw4eOZIsepsaoTHyh9WDAMHso6Kpi9f917pU33Ku01ywPg"
  ]
}

*/