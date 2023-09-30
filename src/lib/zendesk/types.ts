export type Errors<T> = Record<string, T>;

export interface Group {
  id: number;
  name: string;
}

export interface Organization {
  domains: string;
  group: unknown;
  id: number;
  name: string;
  organizationFields: Record<string, unknown>;
  sharedComments: boolean;
  sharedTickets: boolean;
}

export interface Timezone {
  formattedOffset: string;
  ianaName: string;
  name: string;
  offset: number;
}

export interface User {
  avatarUrl: string;
  email: string;
  groups: Array<Group>;
  id: number;
  isSystemUser: boolean;
  locale: string;
  name: string;
  organizations: Array<Organization>;
  role: string;
  signature?: string;
  tags: Array<unknown>;
  timeZone: Timezone;
}

export interface Brand {
  hasHelpCenter: boolean;
  id: number;
  isActive: boolean;
  isDefault: boolean;
  logo?: string;
  name: string;
  subdomain: string;
  url: string;
}

export interface Comment {
  author: User;
  channelDisplayInfo: Record<string, unknown>;
  id: number;
  imageAttachments: Array<unknown>;
  nonImageAttachments: Array<unknown>;
  value: string;
  via: {
    channel: string;
  };
}

export interface Conversation {
  attachments: Array<unknown>;
  author: User;
  channel: { name: string };
  message: {
    content: string;
    contentType: string;
  };
  timestamp: string;
}

export interface Ticket {
  assignee: {
    group?: Group;
    user?: User;
  };
  brand: Brand;
  collaborations: Array<unknown>;
  comment: {
    attachments: Array<unknown>;
    text: string;
    type: string;
    useRichText: boolean;
  };
  comments: Array<Comment>;
  conversation: Array<Conversation>;
  createdAt: string;
  customStatus: {
    id: number;
    name: string;
  };
  description: string;
  id: number;
  isNew: boolean;
  priority: string;
  requester: User;
  status: string;
  statusCategory: string;
  subject: string;
  tags: Array<string>;
  type: string;
  updatedAt: string;
  via: {
    channel: string;
  };
}
