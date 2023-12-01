import { SocialLinksList } from "./navbar/SocialLinksList";

export function TopNavbar() {
  return (
    <div className="flex justify-between border-b md:mx-4 py-6 px-16">
      <div className="flex items-center">
        <p className="font-bold text-xl leading-5">Sourabh Mandal</p>
      </div>
      <SocialLinksList />
    </div>
  );
}
