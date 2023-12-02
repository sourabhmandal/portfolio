import { SocialLinksList } from "./navbar/SocialLinksList";

export function FooterSection() {
  return (
    <footer className="bg-gray-400 text-center p-2 text-white">
      <p className="my-4">You can find me here</p>
      <hr className="text-white mx-64" />
      <SocialLinksList className="my-5" />
    </footer>
  );
}
