import Image from "next/image";
import type { ImageProps } from "next/image";

const Figure = (props: ImageProps) => {
  return <Image {...props} alt={props.alt ?? ""}  className="p-10"/>;
};

export default Figure;
