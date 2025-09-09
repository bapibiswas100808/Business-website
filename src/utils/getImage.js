export function getImageUrl(image, size = "medium") {
  if (!image) return "https://via.placeholder.com/300x300?text=No+Image"; // fallback

  // If image is a direct URL string, return it
  if (typeof image === "string") {
    return image;
  }

  // If image is an object with formats, try to get the requested size
  if (image.formats && typeof image.formats === "object") {
    // Try to get the requested size, fallback to available sizes
    const availableSizes = ["large", "medium", "small", "thumbnail"];

    // If specific size exists, use it
    if (image.formats[size]?.url) {
      return `http://localhost:1337${image.formats[size].url}`;
    }

    // Fallback to any available format
    for (const availableSize of availableSizes) {
      if (image.formats[availableSize]?.url) {
        return `http://localhost:1337${image.formats[availableSize].url}`;
      }
    }
  }

  // If image is an object with url property (for Strapi or similar CMS)
  if (image.url) {
    return `http://localhost:1337${image.url}`;
  }

  return "https://via.placeholder.com/300x300?text=No+Image";
}
