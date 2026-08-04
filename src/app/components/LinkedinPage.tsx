"use client";

import Script from "next/script";

export default function LinkedInBadge() {
  return (
    <>
      <div
        className="badge-base LI-profile-badge"
        data-locale="pt_BR"
        data-size="large"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="seu-perfil"
        data-version="v1"
      />

      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
      />
    </>
  );
}