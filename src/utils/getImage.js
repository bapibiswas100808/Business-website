export function getImageUrl(image, size = "medium") {
  if (!image) return "https://via.placeholder.com/300x300?text=No+Image"; // fallback

  // If image is a direct URL string, return it
  if (typeof image === "string") {
    return image;
  }

  // Helper function to build full URL
  const buildImageUrl = (url) => {
    if (!url) return null;

    // If URL already starts with http/https, return as is (for Cloudinary, etc.)
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    // Otherwise, prepend the Strapi base URL
    const baseUrl = process.env.REACT_APP_STRAPI_URL || "http://localhost:1337";
    return `${baseUrl}${url}`;
  };

  // If image is an object with formats, try to get the requested size
  if (image.formats && typeof image.formats === "object") {
    // Try to get the requested size, fallback to available sizes
    const availableSizes = ["large", "medium", "small", "thumbnail"];

    // If specific size exists, use it
    if (image.formats[size]?.url) {
      return buildImageUrl(image.formats[size].url);
    }

    // Fallback to any available format
    for (const availableSize of availableSizes) {
      if (image.formats[availableSize]?.url) {
        return buildImageUrl(image.formats[availableSize].url);
      }
    }
  }

  // If image is an object with url property (for Strapi or similar CMS)
  if (image.url) {
    return buildImageUrl(image.url);
  }

  return "https://via.placeholder.com/300x300?text=No+Image";
}
