/** Public contact channels — not secrets. */
export const CONTACTS = {
  phone: "0779937633",
  zalo: "https://zalo.me/0779937633",
  email: "nchithanh9999@gmail.com",
  /** Fanpage Dolphin Software */
  facebookPageId: "61592428631532",
  messenger: "https://m.me/61592428631532",
  /** Office / map (Google Maps embed on `#contact`). */
  address: {
    streetAddress: "2 Hùng Hà",
    addressLocality: "Hồ Chí Minh",
    addressRegion: "Tân Sơn Hòa",
    addressCountry: "VN",
    /** Human-readable line for UI */
    label: "2 Hùng Hà, Tân Sơn Hòa, Hồ Chí Minh, Việt Nam",
  },
  maps: {
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5368.179199536905!2d106.66377327624991!3d10.813221589337752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752918715f95af%3A0xcc9b7d6d0ddba391!2zMiBI4buTbmcgSMOgLCBUw6JuIFPGoW4gSMOyYSwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e1!3m2!1sen!2s!4v1788503543248!5m2!1sen!2s",
    /** Open in Google Maps */
    url: "https://www.google.com/maps/place/2+H%C3%B9ng+H%C3%A0,+T%C3%A2n+S%C6%A1n+H%C3%B2a,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8132216,106.6637733,17z",
  },
  /** Public social profiles (Organization sameAs + footer). */
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592428631532",
    instagram: "https://www.instagram.com/c.thanhdev/",
    threads: "https://www.threads.com/@c.thanhdev",
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
  { id: "threads", label: "Threads", href: CONTACTS.social.threads },
  { id: "tiktok", label: "TikTok", href: CONTACTS.social.tiktok },
  { id: "linkedin", label: "LinkedIn", href: CONTACTS.social.linkedin },
  { id: "youtube", label: "YouTube", href: CONTACTS.social.youtube },
];
