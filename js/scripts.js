function getTriangleArea(a, h) {
    return a*h/2;
};

function setValue(value) {
    while ((value <= 0) || (isNaN(value))){
        value = prompt("Nieprawidłowe dane. Podaj prawidłową wartość");
    };
    return value;
};

alert("Witaj, na tej stronie możesz obliczyć pole trójkąta!");
console.log("Witaj, na tej stronie możesz obliczyć pole trójkąta!");

var width = 1,
    height = 1,
    a = 1,
    h = 1,
    triangleArea = 1;

width = prompt("Podaj długość podstawy trójkąta");
    a = setValue(width);
height = prompt("Podaj wysokość trójkąta");
    h = setValue(height);
    
    triangleArea = getTriangleArea(a, h);

alert("Pole trójkąta o podstawie " + a + " i wysokości " + h + " wynosi " + triangleArea);
console.log("Pole trójkąta o podstawie " + a + " i wysokości " + h + " wynosi " + triangleArea);

