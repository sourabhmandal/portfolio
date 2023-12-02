import Image from "next/image";
import Link from "next/link";
import { videoIds } from "../../data/video";
export default function VideoList() {
  return (
    <div className="flex z-12 gap-4 py-6">
      {videoIds.map((video) => (
        <Link href={video.url} target="_blank" key={video.id}>
          <Image
            src={
              "https://img.youtube.com/vi/" + video.id + "/maxresdefault.jpg"
            }
            alt="vid 1"
            width={250}
            height={100}
            className="rounded-md"
          />
        </Link>
      ))}
    </div>
  );
}
