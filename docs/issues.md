# Issues

#### Double message rendering from AJAX call and ActionCable WebSockets call
  - *Solution*
    - Server-side: check before dispatching through action cable, don't dispatch to current_user
    - Client-side: check meta-data sent down with message about who sent it, don't dispatch action if current_user.id === metaData.id  (do both)
