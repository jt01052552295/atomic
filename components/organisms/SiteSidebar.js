import { React, PropTypes, Fragment, useRouter } from "/libraries";

export default function SiteSidebar({ ...props }) {
  // console.log(props);

  return (
    <Fragment>
      <aside className="sidebar-wrapper">
        <div className="sidebar-inner">SIDEBAR</div>
      </aside>
      <style jsx>
        {`
          .sidebar-wrapper {
            width: 30%;
            padding: 14px;
          }
          .sidebar-inner {
            padding-bottom: 20px;
          }
        `}
      </style>
    </Fragment>
  );
}
