import { z } from "zod";

const RawLocationSchema = z.object({
  coordinates: z.tuple([z.number(), z.number()]), // [lat, lng] as authored
  iframe: z.string().url(),
});

export const LocationItemSchema = RawLocationSchema.transform((raw) => {
  const [lat, lng] = raw.coordinates;
  const id = raw.coordinates.join(",");
  return {
    id,
    lat,
    lng,
    iframe: raw.iframe,
  };
});

type RawLocationSchema = z.infer<typeof RawLocationSchema>;

export type LocationItem = z.infer<typeof LocationItemSchema>;

const RAW_LOCATIONS: RawLocationSchema[] = [
  {
    coordinates: [22.3130913, 114.1399994],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760358130867!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDZvNmoySXc.!2m2!1d22.31309132609051!2d114.1399994206632!3f140.42709530793746!4f-4.663788946762921!5f0.7820865974627469",
  },
  {
    coordinates: [22.3211155, 114.1195221],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760358456392!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDZvNmptNEFF!2m2!1d22.32111553804321!2d114.1195221031503!3f40!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.2960639, 114.1916726],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760358491187!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzJzS3VBR2c.!2m2!1d22.29606387217651!2d114.1916726183335!3f140!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.2871932, 114.1851146],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760358513155!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzJzSVMyS1E.!2m2!1d22.28719318078162!2d114.1851146422134!3f353.92282!4f3.376204999999999!5f0.7820865974627469",
  },
  {
    coordinates: [22.3158436, 114.1961517],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760358742571!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGFoS3ZlMFFF!2m2!1d22.31584358087708!2d114.1961516732013!3f60!4f20!5f0.7820865974627469",
  },
  {
    coordinates: [22.3379555, 114.1678009],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760358816810!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHF2ZUw0Wmc.!2m2!1d22.33795549048849!2d114.1678009418115!3f260.4806430640781!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.3364496, 114.1848597],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760358903304!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ1cwdUNyZWc.!2m2!1d22.33644962822903!2d114.1848596577217!3f0!4f10!5f0.7820865974627469",
  },
  {
    coordinates: [22.2807871, 114.2458867],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760358968657!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ20wLUw3WkE.!2m2!1d22.28078707909396!2d114.2458866849657!3f0!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.2666473, 114.1737671],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760359009038!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHF2ZlN4WGc.!2m2!1d22.26664728370904!2d114.1737670998156!3f240!4f10!5f0.7820865974627469",
  },
];

export const LOCATIONS: LocationItem[] = z
  .array(LocationItemSchema)
  .parse(RAW_LOCATIONS);
