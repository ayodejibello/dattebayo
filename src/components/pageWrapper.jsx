const PageWrapper = ({ children, className }) => {
  return <div className={`h-full${className}`}>{children}</div>;
};
export default PageWrapper;
