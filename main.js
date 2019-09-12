var x = prompt ("Введите X");
var y = prompt ("Введите Y");
var x1 = 1;
var y1 = 1;
var x2 = 11;
var y2 = 6;
var inside = ("точка не в проямоугольнике");
 if ( x1 < x &
      x < x2 &
      y1 < y &
      y < y2  )
      { inside = ("точка  в проямоугольнике")
};
alert (inside);
