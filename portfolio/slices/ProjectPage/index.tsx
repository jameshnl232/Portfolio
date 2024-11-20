import Bounded from "@/app/components/Bounded";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

export type ProjectPageProps = SliceComponentProps<Content.ProjectPageSlice>;

const ProjectPage = ({ slice }: ProjectPageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="project-page relative z-30 min-h-screen py-12 md:py-16 lg:py-20"
    >
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="space-y-6 md:space-y-8">
          <Heading
            size="xl"
            className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            {slice.primary.heading}
          </Heading>
          <div className="text-lg text-gray-300 md:text-xl dark:text-gray-300">
            {slice.primary.description}
          </div>
          <Link href={`${slice.primary.projectlink}`}>
            <Button text="View Project" className="my-5" />
          </Link>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
          <PrismicNextImage
            field={slice.primary.projectimage}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default ProjectPage;
