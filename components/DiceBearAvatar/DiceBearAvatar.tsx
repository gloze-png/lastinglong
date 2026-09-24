
import { Avatar, Style } from "@dicebear/core";
import lorelei from "@dicebear/styles/lorelei.json" with { type: "json" };

interface DiceBearAvatarProps {
  seed?: string;
  size?: number;
  className?: string;
}

const DiceBearAvatar = ({
  seed = "Intellinx",
  size = 40,
  className = "",
}: DiceBearAvatarProps) => {
  const avatar = new Avatar(new Style(lorelei), {
    seed,
    size,
  }).toDataUri();

  return (
    <img
      src={avatar}
      alt={`${seed} avatar`}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
    />
  );
};

export default DiceBearAvatar;

