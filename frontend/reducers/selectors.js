export const getGeneralChannels = ({session}) => {
  
  const unfilteredGenChannels = session.currentUser.channels
  let generalChannels = [];
  for (let i = 0; i < unfilteredGenChannels.length; i++) {
    if (unfilteredGenChannels[i].room_type === 'general')
    generalChannels.push(unfilteredGenChannels[i]);
  }
  return generalChannels;
};

export const getDirectMessageChannels = ({session}) => {
  const unfilteredDMChannels = session.currentUser.channels
  let dmChannels = [];
  for (let i = 0; i < unfilteredDMChannels.length; i++) {
    if (unfilteredDMChannels[i].room_type === 'direct_message') {
      dmChannels.push(unfilteredDMChannels[i]);
    }
  }
  return dmChannels;
};
