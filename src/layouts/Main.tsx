import { AnalyticsProvider } from "@yext/pages-components";
import { TemplateProps } from "@yext/pages/*";

export interface MainProps {
  children?: React.ReactNode;
  templateData: TemplateProps;
}

export const Main = ({ children, templateData }: MainProps) => {
  return (
    <AnalyticsProvider
      apiKey="e28da53848a6e8ee815bd443a4eda720"
      currency="USD"
      templateData={templateData}
      productionDomains={["pages-latest.pgsdemo"]}
    >
      <div className="relative min-h-screen">{children}</div>
    </AnalyticsProvider>
  );
};
