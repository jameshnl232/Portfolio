
import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ProjectList from "./ProjectList";
import { createClient } from "@/prismicio";
/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = async ({ slice }: ProjectsProps): Promise<JSX.Element> => {

  const client = createClient();
  const projects = await client.getAllByType("projectpage");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="projects relative z-30 min-h-screen"
    >
      <Heading size="xl" className="mb-10">
        <div className="heading">{slice.primary.heading}</div>
      </Heading>

      <ProjectList items={projects} fallbackImage={slice.primary.fallbackimage} />

    </Bounded>
  );
};

export default Projects;
