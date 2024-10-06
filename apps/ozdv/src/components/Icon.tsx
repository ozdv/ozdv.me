import SVG from "react-inlinesvg";

export function getIcon(icon: string) {
  let path = "";
  try {
    path = require(`../assets/icons/${icon}.svg`).default.src;
  } catch (e) {
    console.error(icon, " is not found: ", e);
  }
  return path;
}

type PropsT = {
  icon: string;
  iconStyle?: string;
  size?: string;
};

export default function Icon(props: PropsT) {
  const { size, icon, iconStyle = "fill-gray-500" } = props;

  if (!icon) return null;

  return (
    <SVG
      className={`${icon} ${iconStyle} flex-shrink-0`}
      src={getIcon(icon)}
      width={size || "24"}
      height={size || "24"}
    />
  );
}
