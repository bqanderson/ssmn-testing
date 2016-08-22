'use strict';

angular.module('initApp', ['ui.knob', 'ngMaterial'])
  .controller('InitController', function ($scope) {
    var vm = this;
    var mileStonesArray = [];
    var mileStones = [];
    var arrayMsPercent = [];
    var tempValue = 0;
    function getPhaseValue(){}
    var phaseOptions = {
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
    }

    // Preloading values for Initiative array
    var initPhases = [{
      // These two valuses will be binding
      phaseName: 'Phase One',
      phaseValue: 0,
      // no longer binding data (this is repeated)
      phaseOptions: phaseOptions,
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
        value: 1,
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
      phaseValue: 0,
      phaseOptions: phaseOptions,
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
        },
        {
          name: 'Increase Bus Riders',
          value: 45,
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

    // Function(s) to mine the data needed
    // console.log('Phases Array:', initPhases);

    vm.initPhases = initPhases;

    // console.log('vm.initPhases', vm.initPhases);

    $scope.$watchCollection(function(){
      var values =[];
      for (var i = 0; i < vm.initPhases.length; i++) {
        // console.log('Each vm.initPhases', vm.initPhases[i]);
        for (var j = 0; j < vm.initPhases[i].mileStones.length; j++) {
          // console.log('Each Milestone',vm.initPhases[i].mileStones[j].value);
          values.push(vm.initPhases[i].mileStones[j].value);
          console.log('Values array', values);
        }
      }
    }, function() {
      var ourArray = [];
        for(var k = 0; k < vm.initPhases.length; k++){
          tempValue = 0;
          for (var l = 0; l < vm.initPhases[k].mileStones.length; l++) {
           var milestone = vm.initPhases[k].mileStones[l];
          //  console.log('MS value', milestone.value);
           arrayMsPercent.push((milestone.value/milestone.msOptions.max)/(vm.initPhases[k].mileStones.length)*100);
          //  console.log('milestone percent', arrayMsPercent);
          }
          for (var m = 0; m < arrayMsPercent.length; m++) {
           tempValue += arrayMsPercent.pop();
          }
         console.log('Total Percent', tempValue);
         vm.initPhases[k].phaseValue = tempValue;
        }

    })




});
