/** Public contact channels — not secrets. */
export const CONTACTS = {
  phone: "0779937633",
  zalo: "https://zalo.me/0779937633",
  email: "nchithanh9999@gmail.com",
  /** Fanpage Dolphin Software */
  facebookPageId: "61592428631532",
  messenger: "https://m.me/61592428631532",
  /** Public social profiles (Organization sameAs + footer). */
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592428631532",
    instagram: "https://www.instagram.com/c.thanhdev/",
    tiktok: "https://www.tiktok.com/@dolphin_software",
    linkedin: "https://www.linkedin.com/company/143083083/",
    youtube: "https://www.youtube.com/channel/UCXquYc8wzFCJjKEXEg2O9vA",
  },
} as const;

export type SocialNetwork = keyof typeof CONTACTS.social;

/** Ordered list for footer / schema sameAs. */
export const SOCIAL_PROFILES: {
  id: SocialNetwork;
  label: string;
  href: string;
}[] = [
  { id: "facebook", label: "Facebook", href: CONTACTS.social.facebook },
  { id: "instagram", label: "Instagram", href: CONTACTS.social.instagram },
  { id: "tiktok", label: "TikTok", href: CONTACTS.social.tiktok },
  { id: "linkedin", label: "LinkedIn", href: CONTACTS.social.linkedin },
  { id: "youtube", label: "YouTube", href: CONTACTS.social.youtube },
];
