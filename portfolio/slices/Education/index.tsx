import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Education`.
 */
export type EducationProps = SliceComponentProps<Content.EducationSlice>;

/**
 * Component for "Education" Slices.
 */
const Education = ({ slice }: EducationProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="education relative z-30 min-h-screen"
      id="education"
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Heading size="xl" className="mb-5">
          <div className="heading">{slice.primary.heading}</div>
        </Heading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {slice.primary.educationlist.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <PrismicNextImage
                  field={item.image}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-primary mb-2 text-3xl font-semibold">
                  {item.schoolname}
                </h3>
                <p className=" mb-4 text-slate-400 ">{item.description}</p>
                <div className="text-muted-foreground flex justify-between text-sm text-yellow-400 ">
                  <span>
                    {item.from} - {item.towhen ? item.towhen : "Present"}
                  </span>
                  <span className="font-medium"> 
                    Grade: {" "}
                    {item.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Education;
