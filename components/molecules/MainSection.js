import { React, PropTypes, Fragment, useRouter } from "/libraries";

export default function MainSection({ ...props }) {
  console.log(props);
  const { children } = props;

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {children}
      </div>
    </section>
  );
}
