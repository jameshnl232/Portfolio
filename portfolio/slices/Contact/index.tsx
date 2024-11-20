import Bounded from "@/app/components/Bounded";
import ContactForm from "@/app/components/ContactForm";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="contact relative z-30 min-h-screen"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading size="xl" className="mb-5">
          <div className="heading">{slice.primary.heading}</div>
        </Heading>
      </div>
      <ContactForm image={slice.primary.image} />
    </Bounded>
  );
};

export default Contact;
