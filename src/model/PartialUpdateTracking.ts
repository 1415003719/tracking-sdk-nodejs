/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */

export interface PartialUpdateTracking {
    /**
     * A unique identifier generated by AfterShip for the tracking.
     */
    id?: string;
    /**
     * Tracking number.
     */
    tracking_number?: string;
    /**
     * Unique code of courier. Get the slugs from .
     */
    slug?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. The shipper’s carrier account number. Refer to our article on  for more details.
     */
    tracking_account_number?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. The origin country/region of the shipment. Refer to our article on  for more details.
     */
    tracking_origin_country?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. The destination country/region of the shipment. Refer to our article on  for more details.
     */
    tracking_destination_country?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. A type of tracking credential required by some carriers. Refer to our article on  for more details.
     */
    tracking_key?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. The date the shipment was sent, using the format YYYYMMDD. Refer to our article on  for more details.
     */
    tracking_ship_date?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. The postal code of the recipient’s address. Refer to our article on  for more details.
     */
    tracking_postal_code?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. The state/province of the recipient’s address. Refer to our article on  for more details.
     */
    tracking_state?: string;
    /**
     * Whether or not AfterShip will continue tracking the shipments. Value is `false` when tag (status) is `Delivered`, `Expired`, or further updates for 30 days since last update.
     */
    active?: boolean;
}

