/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = [
  'tests/functional/email_service.js',
  'tests/functional/mailcheck.js',
  'tests/functional/sync_v3_email_first.js',
  'tests/functional/fx_firstrun_v2_email_first.js',
  // new and flaky tests above here',
  'tests/functional/sign_in.js',
  'tests/functional/sign_in_cached.js',
  'tests/functional/sign_in_blocked.js',
  'tests/functional/sign_in_totp.js',
  'tests/functional/sign_in_recovery_code.js',
  'tests/functional/sync_sign_in.js',
  'tests/functional/sync_force_auth.js',
  'tests/functional/sign_up.js',
  'tests/functional/complete_sign_in.js',
  'tests/functional/complete_sign_up.js',
  'tests/functional/connect_another_device.js',
  'tests/functional/connect_another_service.js',
  'tests/functional/send_sms.js',
  'tests/functional/sync_sign_up.js',
  'tests/functional/sync_v2_sign_up.js',
  'tests/functional/sync_v2_sign_in.js',
  'tests/functional/sync_v2_reset_password.js',
  'tests/functional/sync_v2_settings.js',
  'tests/functional/sync_v2_force_auth.js',
  'tests/functional/sync_v3_force_auth.js',
  'tests/functional/sync_v3_reset_password.js',
  'tests/functional/sync_v3_settings.js',
  'tests/functional/sync_v3_sign_in.js',
  'tests/functional/sync_v3_sign_up.js',
  'tests/functional/fx_desktop_handshake.js',
  'tests/functional/fx_firstrun_v1_sign_up.js',
  'tests/functional/fx_firstrun_v1_sign_in.js',
  'tests/functional/fx_firstrun_v1_settings.js',
  'tests/functional/fx_firstrun_v2_sign_up.js',
  'tests/functional/fx_firstrun_v2_settings.js',
  'tests/functional/fx_ios_v1_sign_in.js',
  'tests/functional/fx_ios_v1_sign_up.js',
  'tests/functional/fx_fennec_v1_sign_in.js',
  'tests/functional/fx_fennec_v1_force_auth.js',
  'tests/functional/fx_fennec_v1_sign_up.js',
  'tests/functional/fx_fennec_v1_settings.js',
  'tests/functional/bounced_email.js',
  'tests/functional/legal.js',
  'tests/functional/tos.js',
  'tests/functional/pp.js',
  'tests/functional/confirm.js',
  'tests/functional/delete_account.js',
  'tests/functional/reset_password.js',
  'tests/functional/sync_reset_password.js',
  'tests/functional/recovery_key.js',
  'tests/functional/robots_txt.js',
  'tests/functional/settings.js',
  'tests/functional/settings_clients.js',
  'tests/functional/settings_common.js',
  'tests/functional/settings_change_email.js',
  'tests/functional/settings_secondary_emails.js',
  'tests/functional/sync_settings.js',
  'tests/functional/change_password.js',
  'tests/functional/force_auth.js',
  'tests/functional/force_auth_blocked.js',
  'tests/functional/404.js',
  'tests/functional/500.js',
  'tests/functional/pages.js',
  'tests/functional/back_button_after_start.js',
  'tests/functional/cookies_disabled.js',
  'tests/functional/password_strength.js',
  'tests/functional/password_visibility.js',
  'tests/functional/avatar.js',
  'tests/functional/alternative_styles.js',
  'tests/functional/email_opt_in.js',
  'tests/functional/refreshes_metrics.js',
  'tests/functional/upgrade_storage_formats.js',
];
