import React from 'react'

import cx from './LoginForm.styl'

export default function(props) {
  return (
    <div className={cx("login-form")}>
      <div className={cx("login-form__row")}>
        <div className={cx("login-form__login-with--fb")}>Login with <span className={cx("login-form__login-with__social-network-name")}>Facebook</span></div>
        <div className={cx("login-form__login-with--sc")}>Login with <span className={cx("login-form__login-with__social-network-name")}>SoundCloud</span></div>
      </div>
      <div className={cx("login-form__row")}>
        <div className={cx("login-form__line")}/>
        OR
        <div className={cx("login-form__line")}/>
      </div>
      <div className={cx("login-form__row")}>
        <input className={cx("login-form__input-field")} placeholder="Login"/>
        <input className={cx("login-form__input-field")} placeholder="Password"/>
      </div>
      <div className={cx("login-form__row")}>
        <div className={cx("login-form__input-button")}>Login</div>
        <div className={cx("login-form__forgot-password")}>Forgot password?</div>
      </div>
      <div className={cx("login-form__row")}>
        <div className={cx("login-form__register")}>No account? <span className={cx("login-form__register__button")}>Register</span></div>
      </div>
    </div>
  );
}
