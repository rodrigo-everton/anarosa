"use client";

import Script from "next/script";

type InstagramPostProps = {
  url: string;
};

export default function InstagramPost({ url }: InstagramPostProps) {
  return (
    <div className="flex w-auto min-w-0 justify-center overflow-hidden">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: 0,
          padding: 0,
          width: "100%",
        }}
      />

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onReady={() => {
          window.instgrm?.Embeds.process();
        }}
      />
    </div>
  );
}
