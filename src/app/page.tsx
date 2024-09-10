import { PostMedia } from "@/components/PostMedia";
import cafeImg from "./images/cafe.jpg";
import sisyaImg from "./images/shisya.jpg";

const altTexts = {
  cafe: {
    accessibleAlt: "テーブルの上にバタートーストとホットコーヒーが乗っている。",
    unaccessibleAlt: "この後本屋さんでずっと欲しかったエッセイ集を買いました。",
  },
  sisya: {
    accessibleAlt:
      "テーブルの上にシーシャが置いてあり、その隣にノートパソコンが開かれている。",
    unaccessibleAlt: "ここのコールドブリューほんとに飲みやすい。",
  },
} as const;

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-full grid justify-center mt-48">
      <div className="flex gap-16">
        <PostMedia
          accesibleAlt={altTexts.cafe.accessibleAlt}
          unaccessibleAlt={altTexts.cafe.unaccessibleAlt}
          imageSrc={cafeImg.src}
          width={cafeImg.width}
          height={cafeImg.height}
        />
        <PostMedia
          accesibleAlt={altTexts.sisya.accessibleAlt}
          unaccessibleAlt={altTexts.sisya.unaccessibleAlt}
          imageSrc={sisyaImg.src}
          width={sisyaImg.width}
          height={sisyaImg.height}
        />
      </div>
    </div>
  );
}
