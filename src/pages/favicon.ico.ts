import type { APIRoute } from "astro";
import sharp from "sharp";
import ico from "sharp-ico";
import path from "node:path";

const faviconSrc = path.resolve("src/images/icon.png");

export const GET: APIRoute = async () => {

  // Resize to multiple sizes
  const sizes = [16, 32];

  const buffers = await Promise.all(
    sizes.map(async (size) => {
      return await sharp(faviconSrc)
        .resize(size)
        .toFormat("png")
        .toBuffer();
    })
  );

  // Convert to an ICO file
  const icoBuffer = ico.encode(buffers);

  return new Response(icoBuffer, {
    headers: { "Content-Type": "image/x-icon" },
  });
};
