import ContentLoader from "react-content-loader";
const CategorySkeleton = () => {
  return (
    <div
      className={`grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 place-items-center mt-[25px] w-full mx-auto`}
    >
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <ContentLoader
            key={index}
            speed={2}
            width={150}
            height={222}
            viewBox="0 0 150 222"
            backgroundColor="#e0e0e0"
            foregroundColor="#f5f5f5"
          >
            <rect x="26" y="148" rx="3" ry="3" width="88" height="6" />
            <circle cx="71" cy="74" r="55" />
          </ContentLoader>
        ))}
    </div>
  );
};

export default CategorySkeleton;
