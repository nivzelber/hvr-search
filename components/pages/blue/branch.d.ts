// NOTE: this is not the full structure of `branch`
// Most of it is not needed
export interface RawBranch {
  img: string;
  name: string;
  desc: string;
  area: string;
  city: string;
  address: string;
  phone: string;
  category: string;
  type?: string;
  kosher: string;
  f_kosher: "N" | "Y";
  is_new: string;
  website: string;
  search_words: string;
  f_name: string; // used for full text search
  f_is_delivery: "N" | "Y";
  latitude: string;
  longitude: string;
}

export interface Branch extends RawBranch {
  id: string;
}

export interface ExtendedBranch extends Branch {
  distanceFromUser?: number;
}
