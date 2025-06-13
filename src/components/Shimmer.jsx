const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {Array(8)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="w-64 h-72 bg-gray-300 animate-pulse rounded-lg shadow-md"
              >
                <div className="h-40 bg-gray-400 rounded-t-lg"></div>
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-400 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-400 rounded w-full"></div>
                </div>
              </div>
            ))}
        </div>
      );
    };


export default Shimmer;