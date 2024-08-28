const ErrorPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <h1 className="text-5xl font-bold lg:text-6xl md:text-5xl sm:text-2xl">Error:  <span className="text-red-500">404</span>, page is not available!</h1>
      </div>
    </div>
  );
};

export default ErrorPage;