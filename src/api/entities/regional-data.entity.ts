import { TimeZone } from './time-zone.entity';

/**
 * Contiene información regional.
 * @export
 */
export interface RegionalData {

  /**
   * Date format (e.g. "MM/dd/yyyy", "dd/MM/yyyy").
   */
  // Se cambia el tipo Date por string.
  dateFormat: string;

  /**
   * Time format (e.g. "hh:mm tt" for 12 hours format, "HH:mm" for 24 hours format).
   */
  timeFormat: string;

  /**
   * Language code (e.g. "en", "es", "pt").
   */
  languageCode: string;

  /**
   * A time zone offset from Coordinated Universal Time (UTC) by a whole number of hours (UTC−12 to UTC+14).
   */
  timeZone: TimeZone;
}
