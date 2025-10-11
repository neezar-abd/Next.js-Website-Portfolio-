import { BlogImageCarousel } from "@/components/blog";
import Image from "next/image";
import Link from "next/link";

export const mdxComponents = {
  // Custom components
  BlogImageCarousel,
  
  // Enhanced HTML elements
  img: (props: any) => (
    <Image
      {...props}
      width={800}
      height={600}
      className="rounded-lg"
      alt={props.alt || "Blog image"}
    />
  ),
  a: (props: any) => (
    <Link
      {...props}
      className="text-blue-600 dark:text-blue-400 hover:underline"
    />
  ),
};
