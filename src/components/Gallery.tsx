const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,gif,webp,avif}', {
  eager: true,
  query: '?url'
}) as Record<string, { default: string }>;

const imageUrls = Object.values(imageModules);

export function Gallery() {
  return (
      <section
          className="py-20 px-6 bg-gradient-to-b from-amber-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {imageUrls.map((imageUrl, index) => {
            const url = imageUrl.default;

            let className = "bg-muted rounded-lg";
            if (index === 3 || index === 5 || index === 13 || index === 16) {
              className += " sm:col-span-2 aspect-square sm:aspect-2/1"
            } else {
              className += " aspect-square"
            }

            return (
                <div className={className}>
                  <img
                      src={url}
                      alt={`Gallery image ${index + 1}`}
                      className="h-full w-full rounded-lg object-cover"
                      loading="lazy"
                  />
                </div>
            );
          })}
          {imageUrls.length === 0 && (
              <div className="col-span-full text-center text-muted-foreground">
                No images found in src/assets/gallery.
              </div>
          )}
        </div>
      </section>
  )
}
