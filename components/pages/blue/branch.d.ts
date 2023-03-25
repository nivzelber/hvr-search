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
  is_new: string;
  website: string;
  search_words: string;
}

export interface Branch extends RawBranch {
  id: string;
}
