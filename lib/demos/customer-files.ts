import filesJson from "@/lib/demos/customer-files.json";

export type CustomerDocKind = "document" | "discovery" | "website" | "crm";

export type CustomerDoc = {
  id: string;
  kind: CustomerDocKind;
  labelVi: string;
  labelEn: string;
  titleVi: string;
  titleEn: string;
  descriptionVi: string;
  descriptionEn: string;
  href: string;
  /** ISO date when the source records one. */
  updated?: string;
};

export type CustomerProject = {
  id: string;
  name: string;
  typeVi: string;
  typeEn: string;
  href: string;
};

export type CustomerFile = {
  id: string;
  nameVi: string;
  nameEn: string;
  initials: string;
  summaryVi: string;
  summaryEn: string;
  statusVi: string;
  statusEn: string;
  contactName: string;
  contactRoleVi: string;
  contactRoleEn: string;
  websiteLabel: string;
  website: string;
  dealVi: string;
  dealEn: string;
  docs: CustomerDoc[];
  projects: CustomerProject[];
};

export const CUSTOMER_FILES = filesJson as CustomerFile[];
