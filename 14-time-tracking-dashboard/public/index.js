const $dataTypeSwitches = $('.dashboard-item__switch');
const $data = $.getJSON('../data/data.json');

let $parsedData = null;


const $activityTypes = [
  { title: 'Work', element: $('.dashboard-item__work') },
  { title: 'Play', element: $('.dashboard-item__play') },
  { title: 'Study', element: $('.dashboard-item__study') },
  { title: 'Exercise', element: $('.dashboard-item__exercise') },
  { title: 'Social', element: $('.dashboard-item__social') },
  { title: 'Self Care', element: $('.dashboard-item__self-care') },
];

function getActiveDataSwitch() {
  return $('.dashboard-item__switch.active').text().toLowerCase().trim();
}

function getLabelForPreviousTime(currentlyActiveSwitch) {
  if (currentlyActiveSwitch === 'daily') {
    return 'Yesterday';
  } else if (currentlyActiveSwitch === 'weekly') {
    return 'Last Week';
  } else {
    return 'Last Month';
  }
}

function displayData(jsonArray) {
  const $currentlyActiveSwitch = getActiveDataSwitch();
  jsonArray.forEach(element => {
    for (let i = 0; i < $activityTypes.length; i++) {
      if (element.title === $activityTypes[i].title) {
        const data = element.timeframes[$currentlyActiveSwitch];
        $activityTypes[i].element.find('.current-hrs').text(`${data.current}hrs`);
        $activityTypes[i].element.find('.last-hrs').text(`${getLabelForPreviousTime($currentlyActiveSwitch)} - ${data.previous}hrs`);
      }
    }
  });
}

$dataTypeSwitches.first().addClass('active');  // by default choose Daily

$dataTypeSwitches.on('click', function () {
  $dataTypeSwitches.removeClass('active');
  $(this).addClass('active');
  displayData($parsedData);
});

$data.done(function(response) {
  displayData(response);
  $parsedData = response;
  $activityTypes.forEach(activity => {
    activity.element.css('visibility', 'visible');
  });
}).fail(function(textStatus, error) {
  console.error("Request Failed: " + textStatus + ", " + error);
});