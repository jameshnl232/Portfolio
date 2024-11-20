import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Certificate`.
 */
export type CertificateProps = SliceComponentProps<Content.CertificateSlice>;

/**
 * Component for "Certificate" Slices.
 */
const Certificate = ({ slice }: CertificateProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for certificate (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Certificate;
