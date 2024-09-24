export interface CreateListingPayloadT {
  title: string;
  price: number;
  description: string;
  categoryId: string;
  latitude: number;
  longitude: number;
  images: any[];
}

export interface CategoriesResponseT {
  id: string;
  name: string;
  icon: string;
  backgroundColor: string;
}

export interface ListitngsResponseT {
  id: string;
  price: number;
  title: string;
  description: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  createdAt: string;
  updatedAt: string;
  listingImages: {
    tumbnail: string;
    fullImage: string;
  }[];
  category: {
    id: string;
    name: string;
    icon: string;
    backgroundColor: string;
  };
}
