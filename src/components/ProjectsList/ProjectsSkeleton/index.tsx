const ProjectCardSkeleton = () => (
  <div className="bg-white dark:bg-[#121214] rounded-xl border border-gray-200 dark:border-[#1a1a1d] p-6 w-full max-w-sm mx-auto animate-pulse">
    {/* Header */}
    <div className="flex items-start justify-between mb-4">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
    
    {/* Description */}
    <div className="space-y-2 mb-6">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
    </div>
    
    {/* Stats */}
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center gap-1">
        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-6"></div>
      </div>
      <div className="flex items-center gap-1">
        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-6"></div>
      </div>
    </div>
    
    {/* Language */}
    <div className="mb-6">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
    </div>
    
    {/* Buttons */}
    <div className="flex gap-3">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex-1"></div>
      <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
    </div>
  </div>
);

const ProjectsSkeleton = ({ count = 6 }: { count?: number }) => (
  <section className="py-16" id="project">
    <div className="max-w-[80%] mx-auto px-5">
      {/* Section Header Skeleton */}
      <div className="mb-12 animate-pulse">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96"></div>
      </div>
      
      {/* Projects Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {Array.from({ length: count }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSkeleton;