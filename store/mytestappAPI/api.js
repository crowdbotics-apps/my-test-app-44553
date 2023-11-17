import axios from "axios"
const mytestappAPI = axios.create({
  baseURL: "https://my-test-app-44553.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return mytestappAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_expenses_list(payload) {
  return mytestappAPI.get(`/api/v1/expenses/`)
}
function api_v1_expenses_create(payload) {
  return mytestappAPI.post(`/api/v1/expenses/`, payload)
}
function api_v1_expenses_retrieve(payload) {
  return mytestappAPI.get(`/api/v1/expenses/${payload.id}/`)
}
function api_v1_expenses_update(payload) {
  return mytestappAPI.put(`/api/v1/expenses/${payload.id}/`, payload)
}
function api_v1_expenses_partial_update(payload) {
  return mytestappAPI.patch(`/api/v1/expenses/${payload.id}/`, payload)
}
function api_v1_expenses_destroy(payload) {
  return mytestappAPI.delete(`/api/v1/expenses/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return mytestappAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return mytestappAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return mytestappAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return mytestappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return mytestappAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return mytestappAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return mytestappAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return mytestappAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return mytestappAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return mytestappAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return mytestappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return mytestappAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return mytestappAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_expenses_list,
  api_v1_expenses_create,
  api_v1_expenses_retrieve,
  api_v1_expenses_update,
  api_v1_expenses_partial_update,
  api_v1_expenses_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
