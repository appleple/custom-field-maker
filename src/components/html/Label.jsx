import React from 'react'

export function Label(props) {
  const { item, preview } = props

  return (
    <>
      {item.title}
      {item.tooltip &&
        <i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip={item.tooltip} />
      }
      {preview && preview.jsValidator &&
        <label className="valid-mark" data-validator={item.name}>
          <span className="acms-admin-icon acms-admin-icon-checklist" />
        </label>
      }
    </>
  );
}
