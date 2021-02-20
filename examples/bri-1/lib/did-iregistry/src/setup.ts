import { createAgent, IDIDManager, IResolver, IDataStore, IKeyManager, IKey } from '@veramo/core'

// Core identity manager plugin
import { DIDManager } from '@veramo/did-manager'

// Ethr did identity provider
import { EthrDIDProvider } from '@veramo/did-provider-ethr'

// Web did identity provider
import { WebDIDProvider } from '@veramo/did-provider-web'

// Core key manager plugin
import { AbstractKeyStore, AbstractSecretBox, KeyManager } from '@veramo/key-manager'

// Custom key management system for RN
import { KeyManagementSystem, SecretBox } from '@veramo/kms-local'

// Custom resolvers
import { DIDResolverPlugin } from '@veramo/did-resolver'
import { Resolver } from 'did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'

// Storage plugin using TypeOrm
import { Entities, KeyStore, DIDStore, IDataStoreORM } from '@veramo/data-store'

// TypeORM is installed with daf-typeorm
import { createConnection } from 'typeorm'
import { ICredentialIssuer,CredentialIssuer } from '@veramo/credential-w3c'


// This will be the name for the local sqlite database for demo purposes
const DATABASE_FILE = 'database.sqlite'

const dbConnection = createConnection({
  type: 'sqlite',
  database: DATABASE_FILE,
  synchronize: true,
  logging: ['error', 'info', 'warn'],
  entities: Entities,
})

// You will need to get a project ID from infura https://www.infura.io
const INFURA_PROJECT_ID = '5ffc47f65c4042ce847ef66a3fa70d4c'

class MemoryKeyStore extends AbstractKeyStore {
  keys: IKey[] = []
  async import(key: IKey): Promise<boolean> {
    this.keys.push(key);
    return true;
  }
  async get({ kid }: { kid: string }): Promise<IKey> {
    const key = this.keys.find(key => key.kid === kid);
    if (key) {
      return key
    }
    throw new Error('Key not found')
  }
  async delete(args: { kid: string }): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

}

export const memKeyStore = new MemoryKeyStore()

export const agent = createAgent<IDIDManager & IKeyManager & IDataStore & IDataStoreORM & IResolver & ICredentialIssuer>({
  plugins: [
    new KeyManager({
      store: new KeyStore(dbConnection,  new SecretBox('29739248cad1bd1a0fc4d9b75cd4d2990de535baf5caadfdf8d8f86664aa830c')),
      kms: {
        local: new KeyManagementSystem(),
      },
    }),
    new DIDManager({
      store: new DIDStore(dbConnection),
      defaultProvider: 'did:ethr:ropsten',
      providers: {
        'did:ethr:ropsten': new EthrDIDProvider({
          defaultKms: 'local',
          network: 'ropsten',
          rpcUrl: 'https://ropsten.infura.io/v3/' + INFURA_PROJECT_ID,
          gas: 210000
        }),
        'did:web': new WebDIDProvider({
          defaultKms: 'local',
        }),
      },
    }),
    new DIDResolverPlugin({
      resolver: new Resolver({
        ethr: ethrDidResolver({
          networks: [{ name: 'ropsten', rpcUrl: 'https://ropsten.infura.io/v3/' + INFURA_PROJECT_ID }],
        }).ethr,
        web: webDidResolver().web,
      }),
    }),
    new CredentialIssuer()
  ],
})