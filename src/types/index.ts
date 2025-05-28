export type Author = {
  id: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  nickname?: string;
};

export type Booking = {
  id: string;
  collectionItem: CollectionItem;
  executionDate?: Date;
  returnDate?: Date;
  expirationDate: Date;
  user: User;
  status: 'overdue' | 'executed' | 'pending';
};

export type CollectionItem = {
  id: string;
  name: string;
  description: string;
  author: Author;
};

export type Loan = {
  id: string;
  collectionItem: CollectionItem;
  executionDate?: Date;
  returnDate?: Date;
  expirationDate: Date;
  user: User;
  status: 'overdue' | 'finished' | 'ongoing';
};

export type User = {
  id: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  nickname?: string;
  role: 'customer' | 'librarian' | 'admin';
};
