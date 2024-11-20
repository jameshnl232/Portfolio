
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
      id="projects"
    >
      <Heading size="xl" className="mb-5">
        <div className="heading">{slice.primary.heading}</div>
      </Heading>

      <div className="text-muted-foreground mb-10 text-lg md:text-3xl">
        {slice.primary.description}
      </div>

      <ProjectList
        items={projects}
        fallbackImage={slice.primary.fallbackimage}
      />
    </Bounded>
  );
};

export default Projects;
