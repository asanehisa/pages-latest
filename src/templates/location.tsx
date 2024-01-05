import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import { Locations as LocationsType } from "../types/autogen";
import { Link } from "@yext/pages-components";

export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: ["id", "name", "slug", "address"],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.name;
};

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: "/locations/assets/yext-favicon.ico",
        },
      },
    ],
  };
};

const Locations: Template<TemplateRenderProps<LocationsType>> = ({
  document,
  relativePrefixToRoot,
}) => {
  const { name } = document;

  return (
    <>
      <h1>Entity Powered Page for Location entities</h1>
      <div>Entity Name: {name}</div>
      <h2>Testing Priority of Env Vars</h2>
      <h1>Relative Prefix to Root: {relativePrefixToRoot}</h1>
      <a href={"lucs-store"}>Test Proxy</a>
    </>
  );
};

export default Locations;
