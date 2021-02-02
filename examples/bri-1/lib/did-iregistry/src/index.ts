export const createDid = async (publisher: (transaction: any) => Promise<void>, address: string, domain: string, messengerUri: string): Promise<any> => {
  throw new Error("Not Implemented")
}

interface DidInformation {
  messengerUri: string
  address: string
}

export const getDidInformation = async (domain: string): Promise<DidInformation> => {
  throw new Error("Not Implemented")
}