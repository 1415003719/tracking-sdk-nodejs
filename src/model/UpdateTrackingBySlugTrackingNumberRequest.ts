/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
import { CustomFieldsUpdateTrackingBySlugTrackingNumberRequest } from "./CustomFieldsUpdateTrackingBySlugTrackingNumberRequest";

export interface UpdateTrackingBySlugTrackingNumberRequest {
    /**
     * The phone number(s) to receive sms notifications.  Supports up to 3 phone numbers.
     */
    smses?: string[];
    /**
     * Email address(es) to receive email notifications. Supports up to 3 email addresses.
     */
    emails?: string[];
    /**
     * By default this field shows the `tracking_number`, but you can customize it as you wish with any info (e.g. the order number).
     */
    title?: string;
    /**
     * Customer name of the tracking.
     */
    customer_name?: string;
    /**
     * A globally-unique identifier for the order.
     */
    order_id?: string;
    /**
     * The URL for the order in your system or store.
     */
    order_id_path?: string;
    /**
     * Custom fields that accept an object with string field. In order to protect the privacy of your customers, do not include any 
     */
    custom_fields?: CustomFieldsUpdateTrackingBySlugTrackingNumberRequest;
    /**
     * Text field for the note
     */
    note?: string;
    /**
     * The recipient’s language. If you set up AfterShip notifications in different languages, we use this to send the recipient tracking updates in their preferred language. Use an  to specify the language.
     */
    language?: string;
    /**
     * The promised delivery date of the order. It uses the formats:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ
     */
    order_promised_delivery_date?: string;
    /**
     * Shipment delivery type- `pickup_at_store`- `pickup_at_courier`- `door_to_door`
     */
    delivery_type?: string;
    /**
     * Shipment pickup location for receiver
     */
    pickup_location?: string;
    /**
     * Shipment pickup note for receiver
     */
    pickup_note?: string;
    /**
     * Unique code of each courier. Provide a single courier.(https://admin.aftership.com/settings/couriers). Get a list of courier slug using 
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
     * Additional field required by some carriers to retrieve the tracking info. The postal code of the recipient’s address. Refer to our article on  for more details.
     */
    tracking_postal_code?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. The date the shipment was sent, using the format YYYYMMDD. Refer to our article on  for more details.
     */
    tracking_ship_date?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. The state/province of the recipient’s address. Refer to our article on  for more details.
     */
    tracking_state?: string;
    /**
     * A unique, human-readable identifier for the order.
     */
    order_number?: string;
    /**
     * Order date in YYYY-MM-DDTHH:mm:ssZ format. e.g. 2021-07-26T11:23:51-05:00
     */
    order_date?: string;
    /**
     * The location_id refers to the place where you fulfilled the items.  - If you provide a location_id, the system will automatically use it as the tracking&#39;s origin address. However, passing both location_id and any origin address information simultaneously is not allowed.- Please make sure you add your locations . 
     */
    location_id?: string;
    /**
     * The shipping_method string refers to the chosen method for delivering the package. Merchants typically offer various shipping methods to consumers during the checkout process, such as, Local Delivery, Free Express Worldwide Shipping, etc.
     */
    shipping_method?: string;
}

