import { z } from "zod";

const RawLocationSchema = z.object({
  coordinates: z.tuple([z.number(), z.number()]), // [lat, lng] as authored
  url: z.string().url(),
  image: z.string().url(),
  iframe: z.string().url(),
});

export const LocationItemSchema = RawLocationSchema.transform((raw) => {
  const [lat, lng] = raw.coordinates;
  const id = raw.coordinates.join(",");
  return {
    id,
    image: raw.image,
    lat,
    lng,
    iframe: raw.iframe,
  };
});

type RawLocationSchema = z.infer<typeof RawLocationSchema>;

export type LocationItem = z.infer<typeof LocationItemSchema>;

const RAW_LOCATIONS: RawLocationSchema[] = [
  {
    coordinates: [22.200515988665213, 113.54521352526373],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1758923579692!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHFqZnUzZFE.!2m2!1d22.29696749070702!2d114.154540126391!3f324.49894717910945!4f-15.661411878381756!5f0.7820865974627469",
    url: "https://youtu.be/OqZqJ6yaeOw?t=132",
    image: "https://i.ytimg.com/vi/ws4HFAWDfic/maxresdefault.jpg",
  },
];

export const LOCATIONS: LocationItem[] = z
  .array(LocationItemSchema)
  .parse(RAW_LOCATIONS);
