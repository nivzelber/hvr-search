import { isAndroid, isIOS } from "./platform";

/**
 * As of 25-04-23, IOS does not yet support 'geo' API
 * In addition, desktop navigation apps are usually not preferred,
 * so google maps will be chosen in any other case
 */
const geoLink = isAndroid ? "geo:?q=" : isIOS ? "maps://?q=" : `https://www.google.com/maps?q=`;

export const buildAddressLink = (address: string) => geoLink + address.split(" ").join("+");
