import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@/app/components/Button";
import Link from "next/link";

/**
 * Props for `Certificate`.
 */
export type CertificateProps = SliceComponentProps<Content.CertificateSlice>;

/**
 * Component for "Certificate" Slices.
 */
const Certificate = ({ slice }: CertificateProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="certificate  relative z-30 min-h-screen "
      id="certificate"
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Heading size="xl" className="mb-5">
          <div className="heading">{slice.primary.heading}</div>
        </Heading>

        <div className="flex justify-start">
          {slice.primary.certlist.map((item, index) => (
            <div
              key={index}
              className="w-full h-full max-w-md overflow-hidden rounded-lg bg-slate-600 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <PrismicNextImage
                  field={item.certimage}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-primary mb-2 text-3xl font-semibold">
                  {item.certname}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.certdescription}
                </p>
                <Link href={`${item.certlink}`} className="inline-block w-full">
                  <Button text="View Certificate" className="w-full" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Certificate;
