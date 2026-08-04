type FacebookPostProps = {
  url: string;
  width?: number;
};

export default function FacebookPost({
  url,
  width = 500,
}: FacebookPostProps) {
  const embedUrl =
    "https://www.facebook.com/plugins/page.php?" +
    new URLSearchParams({
    href: url,
    tabs: "timeline",
    width: String(width),
    height: "680",
    small_header: "false",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "true",
  }).toString();

  return (
    <div className="w-full overflow-hidden">
      <iframe
        src={embedUrl}
        width={width}
        height="680"
        className="mx-auto block max-w-full border-0"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        title="Publicação do Facebook"
      />
    </div>
  );
}