import React from 'react'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export function ChatOnline() {

  return (
    <div className="App">
      <TawkMessengerReact
        propertyId="5ebad98b967ae56c521922bb"
        widgetId="default"
      />
    </div>
  )
}