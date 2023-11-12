export type Addon = {
  name: string;
  price: number;
  selected: boolean;
};

export type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: {name: string; price: number};
  monthly: boolean;
  addons: Addon[];
};

export type Errors = {
  [key: string]: string;
};

type PersonalData = {
  name: string;
  email: string;
  phone: string;
};

export type PersonalInfoProps = PersonalData & {
  updateFields: (fields: Partial<PersonalData>) => void;
  errors: Errors;
};

type PlanData = {
  plan: {name: string; price: number};
  monthly: boolean;
};

export type PlanProps = PlanData & {
  updateFields: (fields: Partial<PlanData>) => void;
};

export type PlanList = {plan: string; price: number; img: string};

export type AddonData = {
  addons: {name: string; price: number; selected: boolean}[];
  monthly: boolean;
};

export type AddonsProps = AddonData & {
  updateFields: (fields: Partial<AddonData>) => void;
};

export type AddonList = {addon: string; price: number; info: string};

export type SummaryProps = FormData & {
  updateFields: (fields: Partial<PlanData>) => void;
};
