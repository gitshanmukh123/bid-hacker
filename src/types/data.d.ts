import { Prisma } from '@prisma/client';


export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
};

// Session model type
export type Session = {
  user: any;
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
};

// User model type
export type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  password?: string | null;
  passwordResetToken?: string | null;
  passwordResetTokenExp?: Date | null;
  accounts: Account[];
  sessions: Session[];
  bb_items: bbItem[];
  bb_bids: bbBid[];
};

// VerificationToken model type
export type VerificationToken = {
  identifier: string;
  token: string;
  expires: Date;
};

// bbItem model type
export type bbItem = {
  id: number;
  userid: string;
  user: User;
  name: string;
  fileKey: string;
  currentbid: number;
  startingprice: number;
  bidinterval: number;
  enddate: Date;
  bb_bids: bbBid[];
};

// bbBid model type
export type bbBid = {
  id: number;
  amount: number;
  itemid: number;
  item: bbItem;
  userid: string;
 user:User;
  timestamp: Date;
};

export type bbBid1 = {
  id: number;
  amount: number;
  itemid: number;
  item: bbItem;
  userid: string;
 user:{
  image:string;
  name:string;
 }
  timestamp: Date;
};

/**
 * Optional: Prisma-specific types
 * 
 * Use these types to work with Prisma's `findMany`, `create`, `update`, etc.
 */
export type PrismaAccountCreateInput = Prisma.AccountCreateInput;
export type PrismaSessionCreateInput = Prisma.SessionCreateInput;
export type PrismaUserCreateInput = Prisma.UserCreateInput;
export type PrismaVerificationTokenCreateInput = Prisma.VerificationTokenCreateInput;
export type PrismaBbItemCreateInput = Prisma.bbItemCreateInput;
export type PrismaBbBidCreateInput = Prisma.bbBidCreateInput;

export type PrismaAccountUpdateInput = Prisma.AccountUpdateInput;
export type PrismaSessionUpdateInput = Prisma.SessionUpdateInput;
export type PrismaUserUpdateInput = Prisma.UserUpdateInput;
export type PrismaVerificationTokenUpdateInput = Prisma.VerificationTokenUpdateInput;
export type PrismaBbItemUpdateInput = Prisma.bbItemUpdateInput;
export type PrismaBbBidUpdateInput = Prisma.bbBidUpdateInput;
