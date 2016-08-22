var initPhases = [{
  phaseName: 'Phase One',
  phaseOptions:{
    skin: {
      type: 'tron'
    },
    size: 300,
    unit: '%',
    barWidth: 40,
    trackColor: 'rgba(255,0,0,.1)',
    prevBarColor: 'rgba(0,0,0,.2)',
    readOnly: true,
    subText: {
      enabled: true,
      text: 'Phase One'
    },
    step: 0.1,
    displayPrevious: true
  },
  mileStones: [{
    name: 'Fundraising',
    value: 350,
    msOptions: {
      skin: {
        type: 'tron',
        width: 5,
        spaceWidth: 2
      },
      size: 90,
      unit: '$',
      max: 4000,
      trackWidth: 20,
      barWidth: 20,
      trackColor: 'rgba(255,0,0,.1)',
      prevBarColor: 'rgba(0,0,0,.2)',
      readOnly: false,
      step: 100,
      displayPrevious: true
    }
  },
  {
    name: 'Membership Drive',
    value: 15,
    msOptions: {
      skin: {
        type: 'tron',
        width: 5,
        spaceWidth: 2
      },
      size: 90,
      unit: '%',
      max: 100,
      trackWidth: 20,
      barWidth: 20,
      trackColor: 'rgba(255,0,0,.1)',
      prevBarColor: 'rgba(0,0,0,.2)',
      readOnly: false,
      step: 1,
      displayPrevious: true
    }
  },
  {
    name: 'Find Location',
    value: 0,
    msOptions:{
      skin: {
        type: 'tron',
        width: 5,
        spaceWidth: 2
      },
      size: 100,
      unit: '',
      max: 1,
      trackWidth: 20,
      barWidth: 20,
      trackColor: 'rgba(255,0,0,.1)',
      prevBarColor: 'rgba(0,0,0,.2)',
      readOnly: false,
      step: 1,
      displayPrevious: true
    }
  }]

},
{
  phaseName: 'Phase Two',
  phaseOptions:{
    skin: {
      type: 'tron'
    },
    size: 300,
    unit: '%',
    barWidth: 40,
    trackColor: 'rgba(255,0,0,.1)',
    prevBarColor: 'rgba(0,0,0,.2)',
    readOnly: true,
    subText: {
      enabled: true,
      text: 'Phase One'
    },
    step: 0.1,
    displayPrevious: true
  },
  mileStones: [{
    name: 'Fundraising',
    value: 100,
    msOptions: {
      skin: {
        type: 'tron',
        width: 5,
        spaceWidth: 2
      },
      size: 90,
      unit: '$',
      max: 6000,
      trackWidth: 20,
      barWidth: 20,
      trackColor: 'rgba(255,0,0,.1)',
      prevBarColor: 'rgba(0,0,0,.2)',
      readOnly: false,
      step: 100,
      displayPrevious: true
    }
  },
  {
    name: 'Increase Bus Routes',
    value: 25,
    msOptions: {
      skin: {
        type: 'tron',
        width: 5,
        spaceWidth: 2
      },
      size: 90,
      unit: '%',
      max: 100,
      trackWidth: 20,
      barWidth: 20,
      trackColor: 'rgba(255,0,0,.1)',
      prevBarColor: 'rgba(0,0,0,.2)',
      readOnly: false,
      step: 1,
      displayPrevious: true
    }
  }]

}]
