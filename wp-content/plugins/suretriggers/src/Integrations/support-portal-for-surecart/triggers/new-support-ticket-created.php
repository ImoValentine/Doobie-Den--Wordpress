<?php
/**
 * NewSupportTicketCreated.
 * php version 5.6
 *
 * @category NewSupportTicketCreated
 * @package  SureTriggers
 * @author   BSF <username@example.com>
 * @license  https://www.gnu.org/licenses/gpl-3.0.html GPLv3
 * @link     https://www.brainstormforce.com/
 * @since    1.0.0
 */

namespace SureTriggers\Integrations\SupportPortalForSureCart\Triggers;

use SureTriggers\Controllers\AutomationController;
use SureTriggers\Integrations\WordPress\WordPress;
use SureTriggers\Traits\SingletonLoader;
use Surelywp_Support_Portal;

if ( ! class_exists( 'NewSupportTicketCreated' ) ) :

	/**
	 * NewSupportTicketCreated
	 *
	 * @category NewSupportTicketCreated
	 * @package  SureTriggers
	 * @author   BSF <username@example.com>
	 * @license  https://www.gnu.org/licenses/gpl-3.0.html GPLv3
	 * @link     https://www.brainstormforce.com/
	 * @since    1.0.0
	 *
	 * @psalm-suppress UndefinedTrait
	 */
	class NewSupportTicketCreated {


		/**
		 * Integration type.
		 *
		 * @var string
		 */
		public $integration = 'SupportPortalForSureCart';


		/**
		 * Trigger name.
		 *
		 * @var string
		 */
		public $trigger = 'sps_new_ticket_created';

		use SingletonLoader;


		/**
		 * Constructor
		 *
		 * @since  1.0.0
		 */
		public function __construct() {
			add_filter( 'sure_trigger_register_trigger', [ $this, 'register' ] );
		}

		/**
		 * Register action.
		 *
		 * @param array $triggers trigger data.
		 * @return array
		 */
		public function register( $triggers ) {

			$triggers[ $this->integration ][ $this->trigger ] = [
				'label'         => __( 'New Support Ticket Created', 'suretriggers' ),
				'action'        => $this->trigger,
				'common_action' => 'surelywp_sp_support_form_submit',
				'function'      => [ $this, 'trigger_listener' ],
				'priority'      => 10,
				'accepted_args' => 2,
			];
			return $triggers;

		}

		/**
		 * Trigger listener
		 *
		 * @param array $new_support_data Support Data.
		 * @param array $support_fields_data Support Fields Data.
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function trigger_listener( $new_support_data, $support_fields_data ) {

			if ( ! class_exists( 'Surelywp_Support_Portal' ) ) {
				return;
			}
			global $wpdb;
			$result       = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$wpdb->prefix}surelywp_sp_support WHERE support_id = %d", $support_fields_data[0]['support_id'] ), ARRAY_A );
			$support_res  = $wpdb->get_results( $wpdb->prepare( "SELECT field_label, field_value FROM {$wpdb->prefix}surelywp_sp_support_form_fields WHERE support_id = %d", $support_fields_data[0]['support_id'] ), ARRAY_A );
			$support_data = [
				'support_id'     => $result['support_id'],
				'order_id'       => $result['order_id'],
				'product_id'     => $result['product_id'],
				'support_title'  => $result['support_title'],
				'support_status' => Surelywp_Support_Portal::surelywp_sp_get_support_status( $result['support_status'] ),
				'support_data'   => $support_res,
			];
			$context      = array_merge( $support_data, WordPress::get_user_context( $result['user_id'] ) );

			AutomationController::sure_trigger_handle_trigger(
				[
					'trigger' => $this->trigger,
					'context' => $context,
				]
			);

		}
	}

	/**
	 * Ignore false positive
	 *
	 * @psalm-suppress UndefinedMethod
	 */
	NewSupportTicketCreated::get_instance();

endif;
