// Responsive table method using display:block and data attributes
// Thanks to @leefroese for suggestion about data attributes

var $table = $('table');
$table.find('tr').each(function() {
  var row = this;
  var count = 0;
  $(row).find('td').each(function() {
    count++;
    var th = ($table.find('th:nth-of-type(' + count + ')').first().text());
    $(this).attr('data-th', th);
  });
});
