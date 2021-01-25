import { IRegistry } from "@baseline-protocol/api"

const createWorkgroup = async (params: object): Promise<any> => {
    return 3;
}

const updateWorkgroup = async (workgroupId: string, params: object): Promise<any> => {
    return 3;
}

const fetchWorkgroups = async (params: object): Promise<any> => {
    return 3;
}

const fetchWorkgroupDetails = async (workgroupId: string): Promise<any> => {
    return 3;
}

const fetchWorkgroupOrganizations = async (workgroupId: string, params: object): Promise<any> => {
    return 3;
}

const createWorkgroupOrganization = async (workgroupId: string, params: object): Promise<any> => {
    return 3;
}

const updateWorkgroupOrganization = async (workgroupId: string, organizationId: string, params: object): Promise<any> => {
    return 3;
}

const fetchWorkgroupInvitations = async (workgroupId: string, params: object): Promise<any> => {
    return 3;
}

const fetchWorkgroupUsers = async (workgroupId: string, params: object): Promise<any> => {
    return 3;
}

const createWorkgroupUser = async (workgroupId: string, params: object): Promise<any> => {
    return 3;
}

const updateWorkgroupUser = async (workgroupId: string, userId: string, params: object): Promise<any> => {
    return 3;
}

const deleteWorkgroupUser = async (workgroupId: string, userId: string): Promise<any> => {
    return 3;
}

const createOrganization = async (params: object): Promise<any> => {
    return 3;
}

const fetchOrganizations = async (params: object): Promise<any> => {
    return 3;
}

const fetchOrganizationDetails = async (organizationId: string): Promise<any> => {
    return 3;
}

const updateOrganization = async (organizationId: string, params: object): Promise<any> => {
    return 3;
}

const fetchOrganizationInvitations = async (organizationId: string, params: object): Promise<any> => {
    return 3;
}

const fetchOrganizationUsers = async (organizationId: string, params: object): Promise<any> => {
    return 3;
}

const inviteOrganizationUser = async (organizationId: string, params: object): Promise<any> => {
    return 3;
}


const registry: IRegistry = {
    createWorkgroup,
    updateWorkgroup,
    fetchWorkgroups,
    fetchWorkgroupDetails,
    fetchWorkgroupOrganizations,
    createWorkgroupOrganization,
    updateWorkgroupOrganization,
    fetchWorkgroupInvitations,
    fetchWorkgroupUsers,
    createWorkgroupUser,
    updateWorkgroupUser,
    deleteWorkgroupUser,
    createOrganization,
    fetchOrganizations,
    fetchOrganizationDetails,
    updateOrganization,
    fetchOrganizationInvitations,
    fetchOrganizationUsers,
    inviteOrganizationUser
};

export default registry;
