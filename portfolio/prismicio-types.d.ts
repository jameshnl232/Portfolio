// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = AboutSlice | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Navbar → NavbarItems*
 */
export interface NavbarDocumentDataNavbaritemsItem {
  /**
   * Section field in *Navbar → NavbarItems*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbaritems[].section
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  section: prismic.KeyTextField;
}

/**
 * Content for Navbar documents
 */
interface NavbarDocumentData {
  /**
   * Name field in *Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * NavbarItems field in *Navbar*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.navbaritems[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navbaritems: prismic.GroupField<Simplify<NavbarDocumentDataNavbaritemsItem>>;

  /**
   * ContactCTA field in *Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.contact_cta
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_cta: prismic.KeyTextField /**
   * MetaTitle field in *Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.title
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  title: prismic.KeyTextField;

  /**
   * MetaDescription field in *Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.metadescription
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metadescription: prismic.KeyTextField;

  /**
   * OG Image field in *Navbar*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.og_image
   * - **Tab**: SEO and Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;
}

/**
 * Navbar document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavbarDocumentData>,
    "navbar",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument | NavbarDocument;

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Heading field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *About → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * ButtonText field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;

  /**
   * ButtonLink field in *About → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.buttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonlink: prismic.LinkField;

  /**
   * Avatar field in *About → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Firstname field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.firstname
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  firstname: prismic.KeyTextField;

  /**
   * Lastname field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.lastname
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  lastname: prismic.KeyTextField;

  /**
   * Tagline field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      NavbarDocument,
      NavbarDocumentData,
      NavbarDocumentDataNavbaritemsItem,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
    };
  }
}
