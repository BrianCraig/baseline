import { IIdentifier } from "@veramo/core";
import { agent } from "./setup"

const WELL_KNOWN_DID_CONFIGURATION_SCHEMA_URI = "https://identity.foundation/.well-known/contexts/did-configuration-v0.0.jsonld";

jest.setTimeout(9400000)

interface Service {
  type: string,
  serviceEndpoint: string,
  slug: string,
}

const generateDidConfiguration = async (did: IIdentifier, domain: string): Promise<string> => {
  const didConfiguration = {
    '@context': WELL_KNOWN_DID_CONFIGURATION_SCHEMA_URI,
    linked_dids: []
  };

  const payload = {
    '@context': ["https://www.w3.org/2018/credentials/v1", WELL_KNOWN_DID_CONFIGURATION_SCHEMA_URI],
    type: ["VerifiableCredential", "DomainLinkageCredential"],
    issuer: { id: did.did },
    issuanceDate: new Date().toISOString(),
    credentialSubject: {
      id: did.did,
      origin: domain
    }
  };

  const vc = await agent.createVerifiableCredential({
    credential: payload,
    proofFormat: 'jwt'
  });

  //@ts-ignore
  didConfiguration.linked_dids.push(vc.proof.jwt);
  return JSON.stringify(didConfiguration);
}

export const createDid = async (publisher: (transaction: any) => Promise<void>, address: string | null, domain: string, services: Service[]): Promise<any> => {
  const did = await agent.didManagerGetOrCreate();
  services.forEach(async service => {
    await agent.didManagerAddService({ did: did.did, service: { id: `${did.did}#${service.slug}`, type: service.type, serviceEndpoint: service.serviceEndpoint } });
  });
  return await generateDidConfiguration(did, domain);
}

interface DidInformation {
  messengerUri: string
  address: string
}

export const getDidInformation = async (domain: string): Promise<DidInformation> => {
  throw new Error("Not Implemented")
}