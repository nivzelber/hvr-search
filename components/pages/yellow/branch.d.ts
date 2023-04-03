// NOTE: this is not the full structure of `branch`
// Most of it is not needed
export interface RawBranch {
  sn: number;
  company: string;
  logo: string;
  company_category: string;
  website: string;
  limitations: string;
  is_online: "Y" | "N";
  search_words: string;
  f_name: string; // used for full text search
}

export interface Branch extends RawBranch {
  id: number;
}
