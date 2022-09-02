import { React, PropTypes, Fragment, useRouter } from "../../libraries";
import { SiteHeader, SiteSidebar, SiteFooter } from "../organisms";
import { MainSection } from "../molecules";

export default function AppLayout({ ...props }) {
  const propTypes = {
    showSidebar: PropTypes.bool,
    children: PropTypes.any,
    url: PropTypes.string,
    images: PropTypes.array,
    title: PropTypes.any,
    description: PropTypes.string,
  };

  const defaultProps = {
    url: "",
    title: "",
    description: "",
    images: [],
    showSidebar: false,
  };

  // console.log(propTypes);

  const {
    children,
    mode,
    title,
    description,
    url,
    images,
    showSidebar,
    showHeader,
    showFooter,
  } = props;
  // console.log(props.children);
  return (
    <Fragment>
      {showHeader ? <SiteHeader /> : ""}

      <MainSection>
        <div className="container">
          <div className="row">
            <div className={showSidebar ? "main-content" : "full-mainContent"}>
              {children}
            </div>
            {showSidebar && <SiteSidebar />}
          </div>
        </div>
      </MainSection>
      {showFooter ? <SiteFooter /> : ""}
      <style jsx global>
        {`
          .row {
            display: flex;
            flex-wrap: wrap;
          }
          .container {
            width: 1020px;
            margin: auto;
          }
          .section-container {
            padding: 40px 0;
          }
          .full-mainContent {
            width: 100%;
            padding: 14px;
          }
          .main-content {
            width: 70%;
            padding: 14px;
          }
        `}
      </style>
    </Fragment>
  );
}
