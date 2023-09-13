import type { Location } from "../types/location";
import haversineDistance from "haversine-distance";

import { DISTANCE_DIGITS_AFTER_THE_DOT } from "../common/constants";

import { isAndroid, isIOS } from "./platform";

// for some reason this is the only working way for null checking GeoPosition objects
export const isGeolocation = (
  geolocation?: GeolocationPosition
): geolocation is GeolocationPosition => geolocation?.coords !== undefined;

/**
 * As of 25-04-23, IOS does not yet support 'geo' API
 * In addition, desktop navigation apps are usually not preferred,
 * so google maps will be chosen in any other case
 */
const geoLink = isAndroid ? "geo:?q=" : isIOS ? "maps://?q=" : `https://www.google.com/maps?q=`;

export const buildAddressLink = (address: string) => geoLink + address.split(" ").join("+");

export const metersBetween = (location1: Location, location2: Location) =>
  haversineDistance(location1, location2);

// global distance representation
export const toDistanceString = (distance: number) =>
  `${(distance / 1000).toFixed(DISTANCE_DIGITS_AFTER_THE_DOT)} ק"מ`;
