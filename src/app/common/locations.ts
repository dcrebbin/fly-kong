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
  {
    coordinates: [22.2931976, 114.1347733],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760418983017!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGFqcmpFdWdF!2m2!1d22.29319761846012!2d114.1347732655642!3f80!4f10!5f0.7820865974627469",
  },
  {
    coordinates: [22.274815, 114.1470713],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419030690!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFdqZjZpbFFF!2m2!1d22.27481497262493!2d114.1470713433502!3f270.97025!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.2666473, 114.1737671],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419075555!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJR0hLZ2x6ZmNF!2m2!1d22.26664728370904!2d114.1737670998156!3f240!4f10!5f0.7820865974627469",
  },
  {
    coordinates: [22.2703978, 114.222145],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419126051!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFdsSkxkWWc.!2m2!1d22.27039784760957!2d114.2221449587309!3f0!4f20!5f0.7820865974627469",
  },
  {
    coordinates: [22.2682778, 114.2534284],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419166832!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHFnNnllWmc.!2m2!1d22.26827781630985!2d114.2534284222413!3f192.24042127723084!4f-11.848522994272997!5f0.7820865974627469",
  },
  {
    coordinates: [22.2609739, 114.2911131],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419201469!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHEzYWJPRUE.!2m2!1d22.26097391389253!2d114.2911130726896!3f300!4f10!5f0.7820865974627469",
  },
  {
    coordinates: [22.2061157, 114.2609253],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419242590!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHE4Nl9xSUE.!2m2!1d22.2061157344466!2d114.2609253147903!3f204.55389681663607!4f-18.81816357194107!5f0.7820865974627469",
  },
  {
    coordinates: [22.2157605, 114.1155079],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419280765!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDJ1LXpVT2c.!2m2!1d22.21576049491707!2d114.1155078707351!3f0!4f10!5f0.7820865974627469",
  },
  {
    coordinates: [22.2146715, 113.946026],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419318549!6m8!1m7!1sCAoSHENJQUJJaEN5dkg1RWlhdEpFcHZITXBRbkdTVzI.!2m2!1d22.21467149654847!2d113.9460260420161!3f147.2895157717329!4f-7.193829530353767!5f0.7820865974627469",
  },
  {
    coordinates: [22.2498276, 113.8464602],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419429429!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ09vS0w0R3c.!2m2!1d22.24982759808619!2d113.8464602000575!3f20!4f10!5f0.7820865974627469",
  },
  {
    coordinates: [22.2768936, 113.8818512],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419478133!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJREU0TGpDVXc.!2m2!1d22.2768935923107!2d113.8818512336592!3f241.90069250006704!4f-18.585733230741994!5f0.7820865974627469",
  },
  {
    coordinates: [22.4288368, 113.9159775],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419572045!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHFxX1drT3c.!2m2!1d22.42883681252616!2d113.9159775266247!3f321.8677316585423!4f-18.211761936396343!5f0.7820865974627469",
  },
  {
    coordinates: [22.3234767, 114.2638367],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419779194!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGMwOXFzTEE.!2m2!1d22.32347669586938!2d114.2638366613467!3f113.81029!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.3119159, 114.2639963],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419811304!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRG1sWWZIaFFF!2m2!1d22.31191588423727!2d114.2639962810317!3f141.77116953266702!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.301306, 114.2598825],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419854854!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRG1nZXpwNFFF!2m2!1d22.30130596242219!2d114.2598825180655!3f235.81218125636897!4f-34.6933911208695!5f0.7820865974627469",
  },
  {
    coordinates: [22.3334149, 114.2930007],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419890112!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRE8tN3VqdWdF!2m2!1d22.33341491603369!2d114.2930007223958!3f80!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.3752689, 114.1352844],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419935123!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHF2ZlN4Ymc.!2m2!1d22.37526888298805!2d114.1352843805607!3f137.1169456288701!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.3735332, 114.1272888],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760419970346!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGNnSmphbFFF!2m2!1d22.373533188948464!2d114.1272888206335!3f295.85811040398636!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.363951, 114.1246821],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420018475!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ1c4X1A4dXdF!2m2!1d22.36395102488726!2d114.1246821179675!3f135.0117528007115!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.360096, 114.1343689],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420064374!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzZzT2JvWlE.!2m2!1d22.36009596972788!2d114.1343689272851!3f82.23394762990613!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.409749, 114.1533807],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420102672!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzZyckwwZlE.!2m2!1d22.40974899588837!2d114.1533806865675!3f78.90246101688123!4f-22.0029022614152!5f0.7820865974627469",
  },
  {
    coordinates: [22.4465048, 114.0557693],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420156410!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDh4Y3JZc0FF!2m2!1d22.44650479820031!2d114.0557693118901!3f1.8197055371780948!4f-15.389364208388102!5f0.7820865974627469",
  },
  {
    coordinates: [22.5056942, 114.0684566],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420216900!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2RsUHVJOUFF!2m2!1d22.50648518664932!2d114.0684026087379!3f344.92088885181954!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.5320217, 114.1018217],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420249763!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHF2YVdMdEFF!2m2!1d22.53202168295728!2d114.1018217260012!3f197.73342397937958!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.537989, 114.220573],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420306675!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGFnZFRDaVFF!2m2!1d22.5379890054661!2d114.220573002784!3f217.30088437499367!4f-15.325517306555128!5f0.7820865974627469",
  },
  {
    coordinates: [22.537989, 114.220573],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420354887!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzYtSktjX3dF!2m2!1d22.50761205319477!2d114.34852882706!3f117.46787871729285!4f-10.04965625764902!5f0.7820865974627469",
  },
  {
    coordinates: [22.5076121, 114.3485288],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420306675!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGFnZFRDaVFF!2m2!1d22.5379890054661!2d114.220573002784!3f217.30088437499367!4f-15.325517306555128!5f0.7820865974627469",
  },
  {
    coordinates: [22.3873917, 114.27745],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420414688!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHU0ci03a1FF!2m2!1d22.38739166629255!2d114.2774500102581!3f10.24089491840377!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.4500233, 114.1740106],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420459103!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0dvNldnWlE.!2m2!1d22.45002332034446!2d114.174010570328!3f140!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.4591718, 114.2188088],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420498286!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHFpLTNVc2dF!2m2!1d22.45917178788362!2d114.2188088425661!3f192.7942230386668!4f4.092036819059373!5f0.7820865974627469",
  },
  {
    coordinates: [22.3778977, 113.9693064],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420590936!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDQtN1NlQ0E.!2m2!1d22.37789772561728!2d113.969306442087!3f248.87689896668866!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.4647942, 114.0165863],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420660183!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0VxdWY2a3dF!2m2!1d22.46479417955691!2d114.0165863407122!3f206.94715774635492!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.4277782, 114.0933304],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420769521!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJREV3ZUxySXc.!2m2!1d22.42777818181999!2d114.0933303805361!3f143.21224319187115!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.2401992, 114.1777214],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420801641!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ3lxOVdtQnc.!2m2!1d22.24019922144945!2d114.1777213926505!3f337.9923!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.2236385, 114.2163467],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420833603!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ3lxOVdtQnc.!2m2!1d22.24019922144945!2d114.1777213926505!3f337.9923!4f0!5f0.7820865974627469",
  },
  {
    coordinates: [22.3052591, 114.0180827],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1760420936985!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHF2ZnlkV3c.!2m2!1d22.30525909113848!2d114.0180826927005!3f340!4f10!5f0.7820865974627469",
  },
  {
    coordinates: [22.3399681,114.0623066],
    iframe:
      "https://www.google.com/maps/embed?pb=!4v1761903333499!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0J5dldBaFFF!2m2!1d22.33996812867349!2d114.0623065785032!3f157.67937655211261!4f-89!5f0.7820865974627469",
  },
];

export const LOCATIONS: LocationItem[] = z
  .array(LocationItemSchema)
  .parse(RAW_LOCATIONS);
