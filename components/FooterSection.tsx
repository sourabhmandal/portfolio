import { SocialLinksList } from "./navbar/SocialLinksList";

export function FooterSection() {
  return (
    <footer className="bg-gray-400 text-center p-2 text-white">
      <p className="my-4">
        This footer component is part of a larger, open-source library of
        Tailwind CSS components. Learn more by going to the official .
      </p>
      <hr className="text-white mx-64" />
      <SocialLinksList className="my-5" />
    </footer>
  );
}
