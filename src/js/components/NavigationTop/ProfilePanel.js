import React from 'react'

import { ExtraToolsButton, UploadButton, MessagesButton, NotificatoinButton } from './index.js'

import cx from './ProfilePanel.styl'

export function ProfilePanel(props) {
  return (
    <div>
      <UploadButton className={cx("profile-panel__button")}/>
      <MessagesButton className={cx("profile-panel__button")}/>
      <NotificatoinButton className={cx("profile-panel__button")}/>
      <ExtraToolsButton className={cx("profile-panel__button")}/>
    </div>
  );
}
export default ProfilePanel;