/**
 * Single source of truth for outbound identity links.
 *
 * These used to be duplicated across Home / Footer / Contact, which is how the
 * Facebook handle drifted (`bakaqc` in the hero vs `dqchuongbk` in the footer).
 * Add a channel here, consume it everywhere.
 */

export const EMAIL = "bakaqc.dev@gmail.com";

export const SOCIALS = {
  github: {
    href: "https://github.com/bakaqc",
    label: "GitHub",
    icon: "uil-github-alt",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/bakaqc",
    label: "LinkedIn",
    icon: "uil-linkedin",
  },
  // NOTE: the hero previously pointed at facebook.com/bakaqc while the footer and
  // the profile README pointed at facebook.com/dqchuongbk. Facebook handles are
  // unique, so at most one was live — `dqchuongbk` is used here because two of the
  // three surfaces already agreed on it. Verify and correct in this one place.
  facebook: {
    href: "https://www.facebook.com/dqchuongbk",
    label: "Facebook",
    icon: "uil-facebook-f",
  },
  kofi: {
    href: "https://ko-fi.com/bakaqc",
    label: "Ko-fi",
    icon: "uil-heart-alt",
  },
  email: {
    href: `mailto:${EMAIL}`,
    label: EMAIL,
    icon: "uil-envelope",
  },
} as const;
