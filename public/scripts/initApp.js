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
      phaseValue: 35,
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
      phaseValue: 20,
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
    console.log('Phases Array:', initPhases);

    vm.initPhases = initPhases;


    for (var i = 0; i < initPhases.length; i++) {
      vm.mileStones = initPhases[i].mileStones
      console.log('vm.mileStones', initPhases[i].phaseName, vm.mileStones);

      // $scope.$watchCollection(function() {
      //   return vm.mileStones.map(function(mileStone){
      //     return vm.mileStone.value;
      //   })
      // }, function(){
      //   console.log('Value of mileStone', mileStone.value);
      // })


      $scope.$watchCollection(function(){
        console.log('Are we here?', vm.mileStones);
        return vm.mileStones.map(function(mileStone){
          // console.log('How about here?');
          console.log('Milestone', mileStone);

          return mileStone.value;
        });
      }, function(){
        // console.log('Are we getting here?', vm.mileStones);
        tempValue = 0;
        for (var j = 0; j < vm.mileStones.length; j++) {
          // console.log('We get here');
          var milestone = vm.mileStones[j];
          // console.log('Milestone', milestone.value);
          arrayMsPercent.push((milestone.value/milestone.msOptions.max)/(vm.mileStones.length)*100);
          // console.log('Milestone %:', arrayMsPercent);
        }
        for (var k = 0; k < arrayMsPercent.length; k++) {
          tempValue += arrayMsPercent.pop();
          // console.log('Phase Value:', vm.initPhases.name, tempValue);
        }
      })
    }


    // console.log('Phase Total Value for', vm.initPhases[i].phaseName, tempValue);




    //
    // $scope.$watchCollection(function () {
    //   return vm.mileStones.map(function(mileStone){
    //     return mileStone.value;
    //   });
    // }, function(){
    //   tempValue = 0;
    //   for (var i = 0; i < vm.mileStones.length; i++) {
    //     var milestone = vm.mileStones[i];
    //     arrayMsPercent.push((milestone.value/milestone.options.max)/(vm.mileStones.length)*100);
    //     console.log(arrayMsPercent);
    //   }
    //   for (var j = 0; j < arrayMsPercent.length; i++) {
    //     tempValue += arrayMsPercent.pop();
    //   }
    //   console.log(tempValue);
    //   vm.phaseOneValue = tempValue;
    // })




    // Function to get Phase Vaule

    // function getPhaseValue(){
    //   tempValue = 0;
    //   for (var i = 0; i < vm.mileStones.length; i++) {
    //     var milestone = vm.mileStones[i];
    //     arrayMsPercent.push((milestone.value/milestone.options.max)/(vm.mileStones.length)*100);
    //     console.log(arrayMsPercent);
    //   }
    //   for (var j = 0; j < arrayMsPercent.length; i++) {
    //     tempValue += arrayMsPercent.pop();
    //   }
    //   console.log(tempValue);
    //   vm.phaseOneValue = tempValue;
    //
    // }
    //
    // // Function to update phase value (keep repeated function ('getPhaseValue()') in there
    // // until I can figure out how to refactor)

    //
    // getPhaseValue();

});
