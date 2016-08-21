'use strict';

angular.module('initApp', ['ui.knob', 'ngMaterial'])
  .controller('InitController', function ($scope) {
    var vm = this;
    var arrayMsPercent = [];
    var tempValue = 0;
    function getPhaseValue(){}

    // Preloading values for mileStones array
    var mileStones = [{
      options:{
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
                subText: {
                  enabled: false,
                  text: 'Fundraising'
                },
                step: 100,
                displayPrevious: true
              },
      value: 350
      },{
      options:{
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
                subText: {
                  enabled: false,
                  text: 'Membership Drive'
                },
                step: 1,
                displayPrevious: true
              },
      value: 15
      },{
      options:{
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
                subText: {
                  enabled: false,
                  text: 'Find Location'
                },
                step: 1,
                displayPrevious: true
              },
      value: 0
      }]

    vm.mileStones = mileStones;

    vm.phaseOneOptions = {
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
        text: 'Phase I'
      },
      scale: {
        enabled: false,
        type: 'lines',
        width: 2
      },
      step: 0.1,
      displayPrevious: true
    }

    vm.phaseTwoOptions = {
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
        text: 'Phase II'
      },
      scale: {
        enabled: false,
        type: 'lines',
        width: 2
      },
      step: 0.1,
      displayPrevious: true
    }

    // Function to get Phase Vaule
    function getPhaseValue(){
      tempValue = 0;
      for (var i = 0; i < vm.mileStones.length; i++) {
        var milestone = vm.mileStones[i];
        arrayMsPercent.push((milestone.value/milestone.options.max)/(vm.mileStones.length)*100);
        console.log(arrayMsPercent);
      }
      for (var j = 0; j < arrayMsPercent.length; i++) {
        tempValue += arrayMsPercent.pop();
      }
      console.log(tempValue);
      vm.phaseOneValue = tempValue;

    }

    // Function to update phase value (keep repeated function in there
    // until I can figure out how to refactor)
    $scope.$watchCollection(function () {
      return vm.mileStones.map(function(mileStone){
        return mileStone.value;
      });
    }, function(){
      tempValue = 0;
      for (var i = 0; i < vm.mileStones.length; i++) {
        var milestone = vm.mileStones[i];
        arrayMsPercent.push((milestone.value/milestone.options.max)/(vm.mileStones.length)*100);
        console.log(arrayMsPercent);
      }
      for (var j = 0; j < arrayMsPercent.length; i++) {
        tempValue += arrayMsPercent.pop();
      }
      console.log(tempValue);
      vm.phaseOneValue = tempValue;

    })

    getPhaseValue();

});
