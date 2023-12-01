import GitHub from "../social_media_icons/GitHub";
import LinkedIn from "../social_media_icons/LinkedIn";
import Twitter from "../social_media_icons/Twitter";
import Youtube from "../social_media_icons/Youtube";

export function SocialLinksList({ className }: { className?: string }) {
  return (
    <div className={"flex items-center gap-2 justify-center" + " " + className}>
      <Youtube />
      <Twitter />
      <LinkedIn />
      <GitHub />
    </div>
  );
}

export default SocialLinksList;
