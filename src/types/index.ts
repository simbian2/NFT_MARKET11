export interface IItem {
  id: number;
  title: string;
  description: string;
  img: string;
  isApproved: boolean;
  owner: string;
}

export interface IAuction {
  auctionId: string;
  auctionTitle: string;
  auctionTypes: any;
  buyNowPrice: string;
  contractAddress: string;
  currentPrice: string;
  expiryDate: string;
  highestBidder: string;
  seller: string;
  tokenId: string;
  tokenInfo?: IItem;
}