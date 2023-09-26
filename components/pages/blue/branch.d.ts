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
  kosher: "" | "כשר" | "למהדרין" | "כשר למהדרין";
  is_new: string;
  website: string;
  search_words: string;
  f_name: string; // used for full text search
  delivery: "ישיבה במסעדה" | "ישיבה במסעדה,משלוחים" | "איסוף עצמי,משלוחים";
  latitude: string;
  longitude: string;
}

export interface Branch extends RawBranch {
  id: string;
}

export interface ExtendedBranch extends Branch {
  distanceFromUser?: number;
}
