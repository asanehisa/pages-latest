import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import { Image } from "@yext/sites-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Main } from "../layouts/Main";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

export const config: TemplateConfig = {
  stream: {
    $id: "home",
    localization: { locales: ["en"] },
    fields: [
      "name",
      "slug",
      "blogStarter_coverPhoto",
      "blogStarter_featuredBlogs.id",
      "blogStarter_featuredBlogs.name",
      "blogStarter_featuredBlogs.slug",
      "blogStarter_featuredBlogs.blogStarter_coverPhoto",
      "blogStarter_featuredBlogs.blogStarter_description",
      "blogStarter_featuredBlogs.datePosted",
      "blogStarter_featuredBlogs.blogStarter_blogAuthor",
    ],
    filter: { entityIds: ["blogStarter_home"] },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return "index.html";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: "Blog Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: "/liberty.ico",
        },
      },
    ],
  };
};

const Home: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { loginWithRedirect } = useAuth0();

  // This is the site object from the Knowledge Graph. It contains all the data
  // for the site entity, and can be accessed in any template, including static templates.
  const { _site } = document;

  React.useEffect(() => {
    console.log(window.location.origin);
  }, []);

  return (
    <Main>
      <Header logo="http://a.mktgcdn.com/p/86Moa_TLbLDstVl9pCx-CZwrroZevu43XtPiCZVCG3U/300x300.png" />
      <main className="mx-auto max-w-5xl px-6 pb-52">
        <div className="flex flex-col gap-8 my-12">
          {document.blogStarter_coverPhoto && (
            <Image image={document.blogStarter_coverPhoto} />
          )}
          <h1 className="text-gray-900 font-bold text-4xl">
            Featured Articles
          </h1>
        </div>
      </main>
      <Footer />
    </Main>
  );
};

export default Home;
