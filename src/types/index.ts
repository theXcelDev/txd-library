export type Author = {
  id: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  nickname?: string;
  bio?: string;
};

export type Booking = {
  id: string;
  collectionItem: CollectionItem;
  executionDate?: Date;
  cancellationDate?: Date;
  expirationDate: Date;
  user: User;
  status: 'overdue' | 'executed' | 'pending' | 'cancelled';
};

export type CollectionItem = {
  id: string;
  name: string;
  description: string;
  preview: string;
  author: Author;
};

export type Loan = {
  id: string;
  collectionItem: CollectionItem;
  executionDate?: Date;
  cancellationDate?: Date;
  returnDate?: Date;
  expirationDate: Date;
  user: User;
  status: 'overdue' | 'finished' | 'ongoing' | 'cancelled';
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
